import React, { useState } from 'react';

// 假设这是分中心图片的数据（对应你之前提供的截图文件名）
// 实际项目中，这些图片应放在 public/分中心 文件夹下
const branchPhotos = [
  { src: "public/分中心/彭埠1-市政协新时代协商民主实践中心矩阵建设座谈会在实践中心上城区分中心召开，市政协毛溪浩副主席参加.webp", title: "市政协新时代协商民主实践中心矩阵建设座谈会" },
  { src: "public/分中心/彭埠2-市区街三级政协党建联建工作会议在彭埠分中心召开.webp", title: "市区街三级政协党建联建工作会议" },
  { src: "public/分中心/彭埠3-彭埠街道委员小组开展“圆梦安居，助力街道回迁安置”民生议事堂专题协商.webp", title: "“圆梦安居”民生议事堂" },
  { src: "public/分中心/彭埠4-彭埠街道委员小组开展非遗体验活动.webp", title: "非遗体验活动" },
  { src: "public/分中心/彭埠5-联盟单位夏衍小学开展棋类比赛.webp", title: "夏衍小学棋类比赛" },
  { src: "public/分中心/彭埠6-妇联界别举办国学文化品鉴暨界别调研总结会.webp", title: "国学文化品鉴会" },
  { src: "public/分中心/彭埠7-共青团、青联界别，工商联界别，科技、科协界别和彭埠街道委员小组联合举办中医养生专题讲座及义诊服务活动.webp", title: "中医养生义诊" },
  { src: "public/分中心/彭埠8-湖滨街道委员小组开展“助推商圈社区建设”民生议事堂活动.webp", title: "助推商圈社区建设" },
  { src: "public/分中心/彭埠9-清波街道委员小组、无党派界别开展清波街道老旧小区物业服务“质价双提”议事协商活动.webp", title: "老旧小区物业协商" },
  { src: "public/分中心/彭埠10-小营街道委员小组举办“遇见东坡”交流会.webp", title: "“遇见东坡”交流会" },
  { src: "public/分中心/彭埠11-望江街道委员小组开展“普及全民金融知识增强百姓防诈意识”专题协商活动.webp", title: "金融防诈专题协商" },
  { src: "public/分中心/彭埠12-南星街道委员小组携手特邀界别举办“赓续历史之文脉，建言服务为民生”冬季读书会及专题协商会.webp", title: "冬季读书会" },
  { src: "public/分中心/紫阳1-区政协孙国方主席赴紫阳分中心调研.webp", title: "孙国方主席调研" },
  { src: "public/分中心/紫阳2-市政协吴玉凤副秘书长调研紫阳分中心建设工作.webp", title: "吴玉凤副秘书长调研" },
  { src: "public/分中心/紫阳3-紫阳上羊实践点开展“推动邻里食堂智能化”专题协商会.webp", title: "邻里食堂智能化协商" },
];

const NewEraDashboard = () => {
  // 默认选中第一个模块
  const [activeModule, setActiveModule] = useState('plan');

  // 导航菜单配置
  const menuItems = [
    { key: 'plan', label: '上城区实践分中心活动计划' },
    { key: 'basic', label: '分中心基本情况介绍' },
    { key: 'gallery', label: '分中心活动风采展示' },
  ];

  // --- 样式定义 ---
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    mainTitle: {
      color: '#1890ff',
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      borderBottom: '3px solid #1890ff',
      display: 'inline-block',
      padding: '0 20px 10px'
    },
    layout: {
      display: 'flex',
      gap: '30px',
    },
    sidebar: {
      width: '260px',
      flexShrink: 0,
    },
    navBtn: (isActive) => ({
      width: '100%',
      padding: '15px 20px',
      marginBottom: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: isActive ? '600' : '500',
      textAlign: 'left',
      transition: 'all 0.3s',
      border: '1px solid transparent',
      backgroundColor: isActive ? '#1890ff' : '#ffffff',
      color: isActive ? '#ffffff' : '#333333',
      boxShadow: isActive ? '0 4px 12px rgba(24, 144, 255, 0.3)' : '0 2px 5px rgba(0,0,0,0.05)',
      borderLeft: isActive ? '5px solid #40a9ff' : '5px solid transparent'
    }),
    contentArea: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      minHeight: '600px'
    },
    // 表格样式
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px'
    },
    th: {
      backgroundColor: '#e6f7ff',
      color: '#1890ff',
      padding: '15px',
      textAlign: 'left',
      border: '1px solid #91d5ff',
      fontWeight: '600'
    },
    td: {
      padding: '12px 15px',
      border: '1px solid #e8e8e8',
      color: '#595959'
    },
    // 图片网格样式
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    photoCard: {
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #f0f0f0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column'
    },
    img: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      display: 'block'
    },
    caption: {
      padding: '12px',
      fontSize: '14px',
      color: '#333',
      lineHeight: '1.5',
      backgroundColor: '#fafafa',
      borderTop: '1px solid #f0f0f0',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    textContent: {
      lineHeight: '1.8',
      color: '#444',
      fontSize: '15px',
      textAlign: 'justify'
    },
    sectionTitle: {
      color: '#1890ff',
      borderBottom: '2px solid #f0f0f0',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center'
    },
    badge: {
      display: 'inline-block',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#1890ff',
      marginRight: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.layout}>
        {/* --- 左侧导航 --- */}
        <div style={styles.sidebar}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveModule(item.key)}
              style={styles.navBtn(activeModule === item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* --- 右侧内容 --- */}
        <div style={styles.contentArea}>
          
          {/* 模块 1: 活动计划 (表格) */}
          {activeModule === 'plan' && (
            <div>
              <div style={styles.sectionTitle}>
                <span style={styles.badge}></span>
                杭州市政协新时代协商民主实践中心上城区实践分中心活动计划
              </div>
              <h3 style={{ color: '#1890ff', marginTop: 0 }}>1.界别、小组活动安排</h3>
              <table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>承办单位</th>
      <th style={styles.th}>活动时间</th>
      <th style={styles.th}>活动形式</th>
    </tr>
  </thead>
  <tbody>
    {/* 1月 */}
    <tr>
      <td style={styles.td}>区政协</td>
      <td style={styles.td}>1月</td>
      <td style={styles.td}>年度计划协商</td>
    </tr>

    {/* 2月 */}
    <tr>
      <td style={styles.td}>
        中共界别<br />
        笕桥街道委员小组
      </td>
      <td style={styles.td}>2月</td>
      <td style={styles.td}>协商、学习</td>
    </tr>

    {/* 3月 */}
    <tr>
      <td style={styles.td}>
        无党派人士界别<br />
        共青团、青联界别<br />
        湖滨街道委员小组
      </td>
      <td style={styles.td}>3月</td>
      <td style={styles.td}>沙龙、学习</td>
    </tr>

    {/* 4月 */}
    <tr>
      <td style={styles.td}>
        紫阳街道委员小组<br />
        彭埠街道委员小组
      </td>
      <td style={styles.td}>4月</td>
      <td style={styles.td}>“上城周”矩阵活动</td>
    </tr>

    {/* 5月 */}
    <tr>
      <td style={styles.td}>
        工会界别<br />
        妇联界别<br />
        清波街道委员小组
      </td>
      <td style={styles.td}>5月</td>
      <td style={styles.td}>协商议事</td>
    </tr>

    {/* 6月 */}
    <tr>
      <td style={styles.td}>
        工商联界别<br />
        科技、科协界别<br />
        小营街道委员小组
      </td>
      <td style={styles.td}>6月</td>
      <td style={styles.td}>协商、学习</td>
    </tr>

    {/* 7月 */}
    <tr>
      <td style={styles.td}>
        侨、台界别<br />
        新闻文体界别<br />
        望江街道委员小组
      </td>
      <td style={styles.td}>7月</td>
      <td style={styles.td}>会议、沙龙、学习</td>
    </tr>

    {/* 8月 */}
    <tr>
      <td style={styles.td}>
        经济界别<br />
        环境资源和农业界别<br />
        南星街道委员小组
      </td>
      <td style={styles.td}>8月</td>
      <td style={styles.td}>沙龙、学习</td>
    </tr>

    {/* 9月 */}
    <tr>
      <td style={styles.td}>
        教育界别<br />
        医卫界别<br />
        凯旋街道委员小组<br />
        闸弄口街道委员小组
      </td>
      <td style={styles.td}>9月</td>
      <td style={styles.td}>会议、协商、学习</td>
    </tr>

    {/* 10月 */}
    <tr>
      <td style={styles.td}>
        社会福利和保障界别<br />
        采荷街道委员小组<br />
        四季青街道委员小组
      </td>
      <td style={styles.td}>10月</td>
      <td style={styles.td}>协商、学习</td>
    </tr>

    {/* 11月 */}
    <tr>
      <td style={styles.td}>
        民族、宗教界别<br />
        特邀界别<br />
        九堡街道委员小组<br />
        丁兰街道委员小组
      </td>
      <td style={styles.td}>11月</td>
      <td style={styles.td}>协商、学习</td>
    </tr>

    {/* 12月 */}
    <tr>
      <td style={styles.td}>区政协</td>
      <td style={styles.td}>12月</td>
      <td style={styles.td}>总结全年工作</td>
    </tr>
  </tbody>
</table>
              <h3 style={{ color: '#1890ff', marginTop: 0 }}>2.彭埠分中心活动安排</h3>
              <tbody>
  {/* 1月 */}
  <tr>
    <td style={styles.td}>
      开展“迎新春·送温情”委员履职实践活动。走访慰问辖区困难家庭、老党员；开展“新春送福”写春联、健康义诊等志愿服务。
    </td>
    <td style={styles.td}>1月</td>
    <td style={styles.td}>暖冬同心同行</td>
  </tr>

  {/* 2月 */}
  <tr>
    <td style={styles.td}>
      开展“罗家老宅有机更新・街区协同治理”民主议事会。联动社区、居民代表，共商保护修缮、展陈提升、周边整治方案；常态化收集群众意见，推动老宅从“建筑保护”向“功能活用”转变。
    </td>
    <td style={styles.td}>2月</td>
    <td style={styles.td}>协商焕新赋能</td>
  </tr>

  {/* 3月 */}
  <tr>
    <td style={styles.td}>
      开展学习贯彻全国两会精神专题读书活动。
      组织政协委员开展专题学习研讨，深学“十五五”规划纲要、政府工作报告核心要义；
      结合辖区实际交流心得，推动两会精神与基层履职深度融合。
    </td>
    <td style={styles.td}>3月</td>
    <td style={styles.td}>书香履职强基</td>
  </tr>

  {/* 4月 */}
  <tr>
    <td style={styles.td}>
      开展“青聚枢纽”AGI青创共同体专题调研活动。
      依托“中国数谷·未来数智港”，聚焦OPC企业政务快捷通道、市场专业服务、导师陪跑辅导等热点问题，
      开展走访调研、座谈交流，形成建议推动落实，助力打造一人独角兽创业社区。
    </td>
    <td style={styles.td}>4月</td>
    <td style={styles.td}>企业赋能提质</td>
  </tr>

  {/* 5月 */}
  <tr>
    <td style={styles.td}>
      开展文旅融合微协商，聚焦夏衍旧居、罗家老宅、大船剧院、钱岸公园等文化地标串珠成链，
      组织文化体验日，开展非遗文化体验活动，协商讨论文化IP打造与文旅融合路径，提升阵地影响力。
    </td>
    <td style={styles.td}>5月</td>
    <td style={styles.td}>文旅融合增效</td>
  </tr>

  {/* 6月 */}
  <tr>
    <td style={styles.td}>
      组织委员深入杨柳郡等未来社区，
      调研托育、养老场景运营情况，就小区公共空间利用、物业纠纷调解等难点建言献策。
    </td>
    <td style={styles.td}>6月</td>
    <td style={styles.td}>未来社区创优</td>
  </tr>

  {/* 7月 */}
  <tr>
    <td style={styles.td}>
      开展“阳光成光”青少年心理健康建设服务活动，
      组织相关委员开设法治教育、科普实践课堂，收集关于青少年校外活动阵地建设的建议。
    </td>
    <td style={styles.td}>7月</td>
    <td style={styles.td}>关爱青春护航</td>
  </tr>

  {/* 8月 */}
  <tr>
    <td style={styles.td}>
      开展“持续推进租住融合，打造和谐共生的人居环境”专题协商会。
      开展民生议事堂活动，围绕三方协同、租住融合等“关键小事”开展实地调研与现场协商。
    </td>
    <td style={styles.td}>8月</td>
    <td style={styles.td}>共建共享治理</td>
  </tr>

  {/* 9月 */}
  <tr>
    <td style={styles.td}>
      开展委员敬老爱老系列服务，提供健康咨询、上门探访等服务；
      围绕养老助餐、日间照料、适老化改造收集优化建议。开展敬老便民服务，调研养老、便民服务需求；
      推动公共服务提质，夯实文旅与城区发展的民生基础。
    </td>
    <td style={styles.td}>9月</td>
    <td style={styles.td}>便民情暖民生</td>
  </tr>

  {/* 10月 */}
  <tr>
    <td style={styles.td}>
      开展小哥驿站运营及新业态新就业群体服务提升专题协商。
      聚焦新业态新就业群体工作强度高、流动性大，面临健康保障、权益维护、社会融入等多重挑战问题，
      开展专题协商，助力其更好融入城市发展。
    </td>
    <td style={styles.td}>10月</td>
    <td style={styles.td}>暖新成长赋能</td>
  </tr>

  {/* 11月 */}
  <tr>
    <td style={styles.td}>
      深化政协委员读书实践活动。
      开展委员读书成果交流研讨会，结合履职实际分享读书心得；
      开展“读书走基层”活动，将读书学习与基层调研、民生服务相结合。
    </td>
    <td style={styles.td}>11月</td>
    <td style={styles.td}>履职交流分享</td>
  </tr>

  {/* 12月 */}
  <tr>
    <td style={styles.td}>
      开展“协商民主彭埠实践”总结展示活动。
      梳理年度工作成效、特色亮点、协商成果；提炼罗家老宅政协实践分中心工作经验，
      明确提升方向，打造有辨识度、有影响力的基层履职品牌。
    </td>
    <td style={styles.td}>12月</td>
    <td style={styles.td}>总结提升优品牌</td>
  </tr>
</tbody>
            </div>
          )}

          {/* 模块 2: 基本情况 (文字) */}
          {activeModule === 'basic' && (
            <div>
              <div style={styles.sectionTitle}>
                <span style={styles.badge}></span>
                杭州市政协新时代协商民主实践中心上城区分中心基本情况
              </div>
              <div style={styles.textContent}>
                
                <p class='indent'>上城区政协坚持以习近平新时代中国特色社会主义思想为指导，深入学习贯彻党的二十大和二十届历次全会精神，锚定新时代人民政协新方位新使命，与市政协新时代协商民主实践中心同频共振、同向发力。立足区域禀赋，整合优势资源，将委员一线履职、政协工作延伸、基层社会治理三者有机结合，“三位一体”建设协商民主实践平台，推动“一南一北”两大分中心建立常态化运营机制，着力打造“一中心一主题、多站点互联动”的平台矩阵，全面提升阵地履职效能，推动协商民主向下扎根、向实发展。</p>
                
                <h3 style={{ color: '#1890ff', marginTop: 0 }}>一、上城区（彭埠）新时代协商民主实践中心</h3>
                <p class='indent'>
                  2023年3月，上城区(彭埠)新时代协商民主实践中心在彭埠街道罗家老宅正式授牌成立。中心依托市政协党建联建结对示范点、杭州市青少年模拟政协实践基地、人民政协报、人民政协网“上城区民情联系点”等多个市区级政协工作阵地资源，高起点打造区街融合、功能集成的民生议事服务综合体。中心按照“一园一堂一馆两站”布局，集成果展示、政策宣传、理论宣讲、民主议事、读书交流、协商议政等功能于一体，构建起全方位、立体化的协商履职平台。2024年6月，杭州市政协在此召开市区两级实践中心矩阵建设交流座谈会，进一步放大阵地示范效应依托市区政协上下联动机制，实践分中心主动对接市政协实践中心联盟资源，先后成为杭州师范大学、西泠印社、浙江大学成人教育学院等单位学习考察基地，持续深化共建共享、互学互鉴，不断提升基层政协阵地履职实效与社会影响力。
                </p>
                
                <h3 style={{ color: '#1890ff', marginTop: '20px' }}>二、上城区（紫阳）新时代协商民主实践中心</h3>
                <p class='indent'>
                  2025年底，上城区政协按照市政协新时代协商民主实践中心矩阵建设要求，立足紫阳街道“新中国第一居”治理底蕴与宋韵文化资源，以“区街联动、共建共享、开放融合、服务为民”为原则，正式启动第二家区级实践中心一-上城区(紫阳)新时代协商民主实践中心建设工作。
                </p>
                <p class='indent'>中心坐落于紫阳西泠书房，按照“一家七景”功能布局，形成“多元协同、闭环落实、效能提升”三大工作机制，打造集协商议事、文化浸润、委员履职、公共服务于一体的基层协商民主阵地，让群众走进政协、贴近政协、了解政协，切实感受协商民主的基层实践温度。</p>
                <p class='indent'>紫阳分中心建设，是政协履职向基层延伸的重要载体，旨在打通协商民主“最后一公里”，通过搭建常态化协商议事平台，凝聚政协委员、居民代表、辖区单位等多方力量，推动多元共治，依托文化品牌开展学习交流与政策宣讲，以协商聚民心、以文化润人心，不断提升基层治理效能，擦亮上城政协基层协商特色品牌。</p>
              </div>
            </div>
          )}

          {/* 模块 3: 分中心风采 (图片) */}
          {activeModule === 'gallery' && (
            <div>
              <div style={styles.sectionTitle}>
                <span style={styles.badge}></span>
                活动剪影
              </div>
              <div style={styles.grid}>
                {branchPhotos.map((photo, index) => (
                  <div key={index} style={styles.photoCard}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      style={styles.img}
                      onError={(e) => {
                        // 如果图片加载失败（例如本地没有该文件），显示占位图
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                      }}
                    />
                    <div style={styles.caption} title={photo.title}>
                      {photo.title.length > 20 ? photo.title.substring(0, 20) + '...' : photo.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEraDashboard;