import React from 'react';
import '../App.css'; // 引入全局样式

const Names = [
  "“老爸好商量”委员工作室", "“邻聚力”委员工作室", "“文润童心”委员工作室", "“育共体 阳光行”委员工作室",
  "爱馨文化公益委员工作室", "采荷街道”幸福19“委员工作室", "春泥委员工作室", "大健康委员工作室",
  "工会界别委员工作室", "建和社区委员工作室", "健康九久委员工作室", "乐动新声委员工作室",
  "茗萃聚智委员工作室", "侨见未来委员工作室","全民阅读委员工作室","社会福利和保障界别工作室","同心·共富委员工作室","有意思委员工作室","俞富康宋韵文化委员工作室","张瑞旭委员工作室",
  "政协湖滨小组委员工作室","政协彭埠小组委员工作室","政协清波小组委员工作室","政协四季青小组委员工作室","政协紫阳小组委员工作室"
];

const StarStudio = () => {
  // 生成 1 到 25 的图片数据数组
  const images = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    return {
      id: id,
      src: `public/星级委员工作室风采/${id}.png`, // 图片路径指向 public/images
      alt: `${Names[i] || '街道'}`
    };
  });

  return (
    <div className="page-container" style={styles.container}>
      <div className="page-title" style={styles.title}>
        星级委员工作室风采展
      </div>

      {/* 图片网格 */}
      <div className="grid-container" style={styles.grid}>
        {images.map((img) => (
          <div key={img.id} className="card" style={styles.card}>
            {/* 标题 */}
            <h3 style={styles.cardTitle}>{img.alt}</h3>
            
            {/* 图片区域：关键修改在这里 */}
            <div style={styles.imageWrapper}>
              <img 
                src={img.src} 
                alt={img.alt} 
                style={styles.image} 
                // 如果图片加载失败，显示一个备选文字
                onError={(e) => {
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* 图片加载失败时的提示 */}
              <div style={styles.errorText}>
                图片未找到<br/>(请检查 public/images/{img.id}.jpg)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 样式对象 ---
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px', // 稍微加宽一点容器
    margin: '0 auto',
    fontFamily: '"Microsoft YaHei", sans-serif'
  },
  title: {
    color: '#d9001b',
    borderBottom: '2px solid #d9001b',
    paddingBottom: '10px',
    marginBottom: '10px',
    fontSize: '24px'
  },
  subtitle: {
    color: '#666',
    marginBottom: '30px',
    fontSize: '14px'
  },
  
  // 网格布局
  grid: {
    display: 'grid',
    // 自动适应宽度，每个卡片最小250px，最大1fr
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px' 
  },

  // 卡片样式
  card: {
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    padding: '15px',
    background: '#fff',
    // 移除了固定高度，让卡片随内容伸缩
    height: 'auto', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },

  cardTitle: {
    margin: '0 0 15px 0',
    color: '#d9001b',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    borderBottom: '1px dashed #eee',
    paddingBottom: '10px'
  },

  // 图片外层容器
  imageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },

  // 图片核心样式
  image: {
    width: '100%',      // 宽度填满卡片
    height: 'auto',     // 高度自动，保持原图比例
    maxHeight: '500px', // 限制最大高度，防止图片过长
    borderRadius: '4px',
    objectFit: 'contain', // 关键：保持图片完整显示，不裁剪
    display: 'block'
  },

  errorText: {
    display: 'none', // 默认隐藏
    color: '#999',
    fontSize: '12px',
    textAlign: 'center',
    padding: '20px'
  }
};

export default StarStudio;