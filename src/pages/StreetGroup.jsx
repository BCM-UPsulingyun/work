import React from 'react';
import '../App.css'; // 引入全局样式

// 街道名称映射表（用于给图片添加标题）
const streetNames = [
  "紫阳街道", "湖滨街道", "清波街道", "小营街道",
  "望江街道", "南星街道", "闸弄口街道", "凯旋街道",
  "采荷街道", "四季青街道", "笕桥街道", "彭埠街道",
  "九堡街道", "丁兰街道"
];

const StreetGroup = () => {
  // 生成 1 到 14 的图片数据数组
  const images = Array.from({ length: 14 }, (_, i) => {
    const id = i + 1;
    return {
      id: id,
      src: `public/images/${id}.png`, // 图片路径指向 public/images
      alt: `${streetNames[i] || '街道'}`
    };
  });

  return (
    <div className="page-container" style={styles.container}>
      <div className="page-title" style={styles.title}>
        街道委员小组风采展
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

export default StreetGroup;