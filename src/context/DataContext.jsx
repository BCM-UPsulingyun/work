import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. 引入三个独立的 JSON 文件
import sectorData from '../assets/sectorMembers.json';
import committeeData from '../assets/committeeGroups.json';
import streetData from '../assets/streetMembers.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    sectorMembers: [],   // 界别
    committeeGroups: [], // 专委会
    streetMembers: []    // 街道
  });

  useEffect(() => {
    // 2. 将导入的数据整理并存入状态
    setData({
      sectorMembers: formatSectorData(sectorData),
      committeeGroups: formatCommitteeData(committeeData),
      streetMembers: formatStreetData(streetData)
    });
  }, []);

  // --- 数据格式化函数 ---

  // 1. 处理界别数据 (处理表头错位问题)
  const formatSectorData = (rawData) => {
    if (!Array.isArray(rawData) || rawData.length === 0) return [];
    
    // 提取表头（第一行）
    const headers = Object.values(rawData[0]);
    
    // 提取数据行（去掉第一行表头）
    return rawData.slice(1).map(row => {
      const item = {};
      headers.forEach((header, index) => {
        // 获取对应列的值，处理 key 为 "Unnamed: X" 的情况
        const key = Object.keys(row)[index];
        item[header] = row[key];
      });
      return item;
    });
  };

  // 2. 处理专委会数据 (结构同界别)
  const formatCommitteeData = (rawData) => {
    if (!Array.isArray(rawData) || rawData.length === 0) return [];
    
    const headers = Object.values(rawData[0]);
    return rawData.slice(1).map(row => {
      const item = {};
      headers.forEach((header, index) => {
        const key = Object.keys(row)[index];
        item[header] = row[key];
      });
      return item;
    });
  };

  // 3. 处理街道数据 (结构同界别)
  const formatStreetData = (rawData) => {
    if (!Array.isArray(rawData) || rawData.length === 0) return [];
    
    const headers = Object.values(rawData[0]);
    return rawData.slice(1).map(row => {
      const item = {};
      headers.forEach((header, index) => {
        const key = Object.keys(row)[index];
        item[header] = row[key];
      });
      return item;
    });
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};