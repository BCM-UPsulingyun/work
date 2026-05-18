import React, { useState, useMemo } from 'react';
import '../App.css'; // 引入你提供的样式文件

// 引入三个 JSON 数据文件
import sectorData from '../assets/sectorMembers.json';
import committeeData from '../assets/committeeGroups.json';
import streetData from '../assets/streetMembers.json';

const MemberHome = () => {
  // --- 状态管理 ---
  const [activeCategory, setActiveCategory] = useState('sector'); // 默认选中界别
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // --- 1. 数据标准化处理 (核心逻辑) ---
  // 将三个结构混乱的 JSON 映射为统一格式: { groupName: [ { name, job, party, gender } ] }

  // 处理【界别】数据 (根据截图：U1=姓名, U2=界别, U3=性别, U4=党派, U5=职务)
  const processedSectors = useMemo(() => {
    const groups = {};
    sectorData.forEach(item => {
      // 过滤掉表头行（如果 JSON 中包含表头的话）
      if (item["Unnamed: 1"] === "姓名") return;

      const group = item["Unnamed: 2"] || "未分类界别";
      const member = {
        name: item["Unnamed: 1"],
        party: item["Unnamed: 4"],
        gender: item["Unnamed: 3"],
        job: item["Unnamed: 5"]
      };

      if (!groups[group]) groups[group] = [];
      groups[group].push(member);
    });
    return groups;
  }, []);

  // 处理【专委会】数据 (根据截图：U1=专委会名, U2=姓名, U3=党派, U4=性别, U5=职务)
  const processedCommittees = useMemo(() => {
    const groups = {};
    committeeData.forEach(item => {
      if (item["Unnamed: 2"] === "姓名") return; // 过滤表头

      const group = item["Unnamed: 1"] || "未分配专委会";
      const member = {
        name: item["Unnamed: 2"],
        party: item["Unnamed: 3"],
        gender: item["Unnamed: 4"],
        job: item["Unnamed: 5"]
      };

      if (!groups[group]) groups[group] = [];
      groups[group].push(member);
    });
    return groups;
  }, []);

  // 处理【街道】数据 (根据截图：U1=街道名, U2=姓名, U3=党派, U4=性别, U5=职务)
  const processedStreets = useMemo(() => {
    const groups = {};
    streetData.forEach(item => {
      // 过滤表头或无效数据
      if (item["Unnamed: 1"] === "街道" || item["Unnamed: 2"] === "姓名") return;

      const group = item["Unnamed: 1"] || "未分配街道";
      const member = {
        name: item["Unnamed: 2"],
        party: item["Unnamed: 3"],
        gender: item["Unnamed: 4"],
        job: item["Unnamed: 5"]
      };

      if (!groups[group]) groups[group] = [];
      groups[group].push(member);
    });
    return groups;
  }, []);

  // --- 2. 动态获取当前数据源 ---
  const currentDataMap = useMemo(() => {
    if (activeCategory === 'sector') return processedSectors;
    if (activeCategory === 'committee') return processedCommittees;
    if (activeCategory === 'street') return processedStreets;
    return {};
  }, [activeCategory, processedSectors, processedCommittees, processedStreets]);

  // 获取分组列表
  const groupNames = Object.keys(currentDataMap).sort();

  // 获取当前选中的成员列表
  const currentMembers = useMemo(() => {
    if (!selectedGroup) return [];
    return currentDataMap[selectedGroup] || [];
  }, [selectedGroup, currentDataMap]);

  // --- 3. 搜索过滤 ---
  const filteredMembers = useMemo(() => {
    if (!searchTerm) return currentMembers;
    const term = searchTerm.toLowerCase();
    return currentMembers.filter(m =>
      m.name?.includes(term) ||
      m.job?.includes(term) ||
      m.party?.includes(term)
    );
  }, [currentMembers, searchTerm]);

  // --- 事件处理 ---
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedGroup('');
    setSearchTerm('');
  };

  return (
    <div className="page-container">
      <h2 className="page-title">政协委员名单查询</h2>

      {/* 一级菜单：切换数据源 */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          className={`btn ${activeCategory === 'sector' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('sector')}
        >
          按界别查看
        </button>
        <button
          className={`btn ${activeCategory === 'committee' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('committee')}
        >
          按专委会查看
        </button>
        <button
          className={`btn ${activeCategory === 'street' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('street')}
        >
          按街道查看
        </button>
      </div>

      {/* 二级菜单：选择分组 */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label>选择分组：</label>
        <select
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
            setSearchTerm('');
          }}
          style={{ padding: '5px', flex: 1 }}
        >
          <option value="">-- 请选择具体分组 --</option>
          {groupNames.map(name => (
            <option key={name} value={name}>
              {name} ({currentDataMap[name].length}人)
            </option>
          ))}
        </select>
      </div>

      {/* 搜索框 */}
      {selectedGroup && (
        <div style={{ marginBottom: '30px' }}>
          <input
            type="text"
            placeholder="输入姓名、职务或党派进行搜索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      )}

      {/* 结果展示 */}
      {selectedGroup ? (
        <div>
          <h3 style={{ borderBottom: '2px solid var(--primary-red)', paddingBottom: '10px', marginBottom: '20px' }}>
            【{selectedGroup}】名单
            <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
              共找到 {filteredMembers.length} 人
            </span>
          </h3>

          {filteredMembers.length > 0 ? (
            <div className="grid-container">
              {filteredMembers.map((member, idx) => (
                <div key={idx} className="card">
                  <h3>{member.name}</h3>
                  <p><strong>职务：</strong>{member.job}</p>
                  <p><strong>党派：</strong>{member.party}</p>
                  <p><strong>性别：</strong>{member.gender}</p>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
              该分组下暂无数据或未找到匹配项
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
          请在上方选择要查看的分类和分组
        </div>
      )}
    </div>
  );
};

export default MemberHome;