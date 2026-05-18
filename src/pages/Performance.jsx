import React from 'react';
import data from '/src/assets/履职平台.json';

// --- 第一步：定义独立的图片列表和对应的长标题 ---
const photoGallery = [
  {
    src: 'public/委员履职平台/1-政协湖滨小组委员工作室-学习考察新质生产力一-万事利科创中心.webp',
    caption: '政协湖滨小组委员工作室-学习考察新质生产力一-万事利科创中心'
  },
  {
    src: 'public/委员履职平台/2-政协清波小组委员工作室-幸福清波，文化送福，联动中国美院为清波派出所、禁毒所、清波居民送新年祝福.webp',
    caption: '政协清波小组委员工作室-幸福清波，文化送福，联动中国美院为清波派出所、禁毒所、清波居民送新年祝福'
  },
  {
    src: 'public/委员履职平台/3-政协紫阳“三一”委员工作室-践行“委员说·委员做”，锚定“两个先行”目标，领跑“基层白治”之路.webp',
    caption: '政协紫阳“三一”委员工作室-践行“委员说·委员做”，锚定“两个先行”目标，领跑“基层白治”之路'
  },
  {
    src: 'public/委员履职平台/4-采荷街道“幸福19”委员工作室-“疗愈经济分享体验会”活动.webp',
    caption: '采荷街道“幸福19”委员工作室-“疗愈经济分享体验会”活动'
  },
  {
    src: 'public/委员履职平台/5-政协四季青小组委员工作室-市区县三级联动，召开“投早投小投科技”专题协商会.webp',
    caption: '政协四季青小组委员工作室-市区县三级联动，召开“投早投小投科技”专题协商会'
  },
  {
    src: 'public/委员履职平台/6-政协彭埠小组委员工作室-邀请非遗传承人开展非遗制作体验活动.webp',
    caption: '政协彭埠小组委员工作室-邀请非遗传承人开展非遗制作体验活动'
  },
  {
    src: 'public/委员履职平台/7-工会界别委员工作室-开展“美丽大讲堂”活动.webp',
    caption: '工会界别委员工作室-开展“美丽大讲堂”活动'
  },
  {
    src: 'public/委员履职平台/8-社会福利和保障界别委员工作室-残疾人之家的义卖活动.webp',
    caption: '社会福利和保障界别委员工作室-残疾人之家的义卖活动'
  },
  {
    src: 'public/委员履职平台/9-“文润童心”委员工作室-传承和弘扬中华优秀传统文化，探索乡村优秀传统文化启蒙教育新路径.webp',
    caption: '“文润童心”委员工作室-传承和弘扬中华优秀传统文化，探索乡村优秀传统文化启蒙教育新路径'
  },
  {
    src: 'public/委员履职平台/10-全民阅读委员工作室-举办宋韵美学体验活动.webp',
    caption: '全民阅读委员工作室-举办宋韵美学体验活动'
  },
  {
    src: 'public/委员履职平台/11-爱馨文化公益委员工作室-爱馨文化公益委员工作室.webp',
    caption: '爱馨文化公益委员工作室-爱馨文化公益委员工作室'
  },
  {
    src: 'public/委员履职平台/12-“老爸好商量”委员工作室-发扬重视家庭教育优良传统，助力孩子健康快乐成长，举办亲子运动会.webp',
    caption: '“老爸好商量”委员工作室-发扬重视家庭教育优良传统，助力孩子健康快乐成长，举办亲子运动会'
  },
  {
    src: 'public/委员履职平台/13-有意思委员工作室-工作室委员与社区居民代表召开民生座谈会，听取居民对小区提升、菜场改造、停车难等问题的意见建议.webp',
    caption: '有意思委员工作室-工作室委员与社区居民代表召开民生座谈会，听取居民对小区提升、菜场改造、停车难等问题的意见建议'
  },
  {
    src: 'public/委员履职平台/14-侨见未来委员工作室-关于社区居民空调安装纠纷的专项协商会.webp',
    caption: '侨见未来委员工作室-关于社区居民空调安装纠纷的专项协商会'
  },
  {
    src: 'public/委员履职平台/15-张瑞旭委员工作室-举办委员工作室跨代共融日活动.webp',
    caption: '张瑞旭委员工作室-举办委员工作室跨代共融日活动'
  },
  {
    src: 'public/委员履职平台/16-大健康委员工作室-传承国粹，践行公益，走进社区开展健康宣教义诊活动.webp',
    caption: '大健康委员工作室-传承国粹，践行公益，走进社区开展健康宣教义诊活动'
  },
  {
    src: 'public/委员履职平台/17-俞富康宋韵文化委员工作室-国际艺术交流送中国“福”.webp',
    caption: '俞富康宋韵文化委员工作室-国际艺术交流送中国“福”'
  },
  {
    src: 'public/委员履职平台/18-春泥委员工作室-两会期间迎新送福、送春联.webp',
    caption: '春泥委员工作室-两会期间迎新送福、送春联'
  },
  {
    src: 'public/委员履职平台/19-“邻聚力”委员工作室-凝聚社会公益慈善之心，开展“让每个孩子像花儿一样绽放”主题论坛.webp',
    caption: '“邻聚力”委员工作室-凝聚社会公益慈善之心，开展“让每个孩子像花儿一样绽放”主题论坛'
  },
  {
    src: 'public/委员履职平台/20-建和社区委员工作室-党建引领，做好点滴惠民小事，走访慰问九和人家独居老人.webp',
    caption: '建和社区委员工作室-党建引领，做好点滴惠民小事，走访慰问九和人家独居老人'
  },
  {
    src: 'public/委员履职平台/21-健康九久委员工作室-召开健康普及专题座谈会.webp',
    caption: '健康九久委员工作室-召开健康普及专题座谈会'
  },
  {
    src: 'public/委员履职平台/22-同心·共富委员工作室-举行“乡村音乐节”，用实用管用的好点子，助力乡村振兴.webp',
    caption: '同心·共富委员工作室-举行“乡村音乐节”，用实用管用的好点子，助力乡村振兴'
  },
  {
    src: 'public/委员履职平台/23-茗荟聚智委员工作室-开展“茶韵议事”交流活动.webp',
    caption: '茗荟聚智委员工作室-开展“茶韵议事”交流活动'
  },
  {
    src: 'public/委员履职平台/24-“育共体 阳光行”委员工作室-“小小政协委员”青少年模拟政协活动.webp',
    caption: '“育共体 阳光行”委员工作室-“小小政协委员”青少年模拟政协活动'
  },
  {
    src: 'public/委员履职平台/25-乐动新声委员工作室-委员工作室.webp',
    caption: '乐动新声委员工作室-委员工作室'
  },
];

const Performance = () => {
  // --- 样式修改重点：photoCaption ---
  const styles = {
    pageContainer: { padding: '20px', fontFamily: '"Microsoft YaHei", sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' },
    gridContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
    column: { flex: '1', minWidth: '300px' },
    card: { backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' },
    sectionTitle: { fontSize: '18px', fontWeight: 'bold', color: '#1890ff', marginBottom: '15px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' },
    photoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }, // 稍微调大间距
    photoCard: { border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
    photoImage: { width: '100%', height: '160px', objectFit: 'cover' },
    // 修改了这里：
    photoCaption: {
      padding: '12px',
      fontSize: '14px',
      color: '#333',
      lineHeight: '1.6',
      backgroundColor: '#fff',
      // 移除 flex: 1，让高度由内容决定
      // 移除 display: -webkit-box 等省略号属性
      whiteSpace: 'normal', // 允许换行
      wordBreak: 'break-all', // 防止超长英文/数字不换行
      textAlign: 'left'
    },
    studioCard: { border: '1px solid #e8e8e8', borderRadius: '6px', padding: '12px', marginBottom: '12px', backgroundColor: '#fafafa' },
    studioName: { fontWeight: 'bold', color: '#333', marginBottom: '5px', fontSize: '14px' },
    studioInfo: { fontSize: '12px', color: '#666', marginBottom: '2px' },
  };

  return (
    <div style={styles.pageContainer}>
      {/* 左侧简介 */}
      <div style={{ ...styles.column, maxWidth: '1400px' }}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>履职平台简介</div>
          <p className='indent'>上城区政协按照“向基层延伸覆盖”和“不建机构建机制”工作要求，坚持党建引领，强化委员工作室“三位一体”建设，牢牢把握功能定位，立足区域发展实际，以打造“一室一品”为特色，深化“楼宇商圈”“宋韵文化”和“全龄特有爱”公益慈善品牌建设，着力构建宽领域、多层次、常态化的协商体系，不断提升委员工作室辨识度和影响力，密切与界别群众的联系，凝聚社会各界共识，助推区域经济高质量发展。</p>
          <p className='indent'>目前，全区共有委员工作室50家，实现履职平台街道委员小组全覆盖。同时每年开展星级委员工作室认定工作，激发委员工作室的创先争优意识。2025年度共认定五星级委员工作室25家，四星级委员工作室17家，三星级委员工作室4家。</p>
        </div>
      </div>

      {/* 中间图片集（完全独立展示 25 张照片，文字完全显示） */}
      <div style={{ ...styles.column, flex: '2' }}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>活动风采</div>
          <div style={styles.photoGrid}>
            {photoGallery.map((photo, index) => (
              <div key={index} style={styles.photoCard}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={styles.photoImage}
                  onError={(e) => {
                    e.target.style.display = 'none'; // 隐藏加载失败的图片
                  }}
                />
                <div style={styles.photoCaption}>
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧列表（完全独立展示 JSON 里的所有工作室数据） */}
      <div style={{ ...styles.column, maxHeight: '850px', overflowY: 'auto', border: '1px solid #e8e8e8', borderRadius: '8px' }}>
        <div style={{...styles.card, marginBottom: '0'}}>
          <div style={styles.sectionTitle}>工作室列表 ({data.studios.length})</div>
          {data.studios.map((studio) => (
            <div key={studio.id} style={styles.studioCard}>
              <div style={styles.studioName}>{studio.id}. {studio.name}</div>
              <div style={styles.studioInfo}><strong>负责人:</strong> {studio.leader}</div>
              <div style={styles.studioInfo}><strong>地址:</strong> {studio.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;