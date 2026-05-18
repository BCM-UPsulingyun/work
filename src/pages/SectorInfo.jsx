import React, { useState, useEffect } from 'react';
import '../App.css';

// --- 1. 界别详细配置数据 (根据提供的材料完整更新) ---
const sectorConfig = [
  {
    id: '1',
    name: '中共界',
    folder: '1中共',
    contact_leader:'孙国方、王良约',
    leader: '张健（区委组织部副部长、区委人才办常务副主任）、杨盛强（区委统战部常务副部长、区民宗局局长、区侨办主任）',
    desc: '中共界别共有委员20名。充分发挥中共党员委员的关键少数作用，牢固树立“党员委员履职要更先进”理念，带头履行好调查研究、参政议政职责，服务中心大局。近年来，中共界别广泛开展调研，听取意见建议，提出“深入挖掘机关资源服务产业突破年”等针对性提案；在一届二次会议上，起草“发挥党员委员先锋模范作用中画好最大同心圆”为主题的大会交流材料，并常态化开展界别活动。聚焦产业突破年和人才引育主题，结合“三支队伍”建设，在创新型人才和企业家队伍建设方面，界别委员立足岗位，充分链接经济界别和科技科协界别委员资源，定期参与项目（人才）专场活动，推荐海外人才（项目）信息,助力上城区经济社会高质量发展。,助力上城区经济社会高质量发展。'
  },
  {
    id: '2',
    name: '无党派界',
    folder: '2无党派',
    contact_leader:'范国良',
    leader: '陈奕东（区卫生健康局信息化建设科科长）、沈波（光大银行总行投顾，杭州分行投顾总监）',
    desc: '无党派界别共有委员20名。无党派界别在区政协各位领导关心关怀下，在委员工作委员会精心指导下，充分发挥自身优势，积极履行政治协商、民主监督、参政议政职能，努力为推动上城区经济社会发展做出积极贡献。2024年组织委员围绕上城区“产业突破年”的主题，聚焦推进公共法律服务体系建设，推动区涉外法务中心建设；2025年围绕中央创新区建设，积极开展调研，形成了《关于提升上城区创新驱动能级，破解“CBD到CID”人才与科产融合瓶颈的对策研究》报告。几年来，各委员结合自身特长搭建资源交流平台，广泛收集社情民意，开展服务群众活动。目前已有5个委员成立委员工作室：“无党派委员工作室”“缪渭川工作室”“老字号工作室”“视觉之思工作室”“智慧钱潮工作室”。界别委员积极投身社会公益事业，关爱弱势群体，助力社会和谐，在促进经济发展、推动科技创新等方面发挥了重要作用。委员们通过发挥界别独特力量，提升了无党派界别的影响力和美誉度，展现出无党派人士的责任与担当。'
  },
  {
    id: '3',
    name: '共青团、青联界',
    folder: '3共青团、青联',
    contact_leader:'叶榕',
    leader: '郑斐尹（团区委副书记）、华剑波（区政协办公室信息宣传科科长）',
    desc: '共青团、青联界别共有委员19名。围绕青年发展型城区建设，创新打造“青尚共议”协商议事品牌，组织政协委员、青联委员、团代表和基层青年，依托委员工作室、团代表联络站等阵地，聚焦当前经济发展重心和青年群众关心热点，坚持问题导向，搭建协商平台，常态化开展协商议事和青少年模拟政协活动。同时在网红店铺、商业街区、创业园区等青年人流量大的区域设立“青年观察点”，面向社会招募“青年观察家”，深入开展调研走访，更好发挥青年主体作用，为上城青年工作建言献策。'
  },
  {
    id: '4',
    name: '工会界',
    folder: '4工会',
    contact_leader:'叶榕',
    leader: '蔡肇颖（区总工会党组成员、副主席）、陈磊（北京大成（杭州）律师事务所中国区高级合伙人）',
    desc: '工会界别共有委员19名。在上城区工人文化宫成立工会界别委员工作室，以“职有所需，工有所会”为宗旨，依托文化宫齐全的功能、丰富的资源加持，体现联系群众、协调关系、凝聚共识作用优势，发挥政治理论学习桥梁、组织文体活动桥梁、联系职工协商桥梁、建言献策履职桥梁的“代言人”“娘家人”作用，打造“工会娘家人 请你来协商”政协品牌，发挥界别委员职业特长，常态化驻室参与协商。自成立以来，工作室累计开展各类宣讲7次、活动75场、课程116堂，参与职工达3万余人次，接待异地考察政协团队2次，逐渐使工作室成为直通职工的桥梁、协商于民人的路径、服务民生的平台、征集民意的渠道、展示形象的窗口和联系职工的驿站。'
  },
  {
    id: '5',
    name: '妇联界',
    folder: '5妇联',
    contact_leader:'叶榕',
    leader: '吕仕琼（区妇联党组成员、副主席）、高艳霞（丁兰街道办事处妇联主席）',
    desc: '妇联界别共有委员17名，来自政治、经济、文化、政法等各领域。界别活动有“温度”：以“固定（5名结对群众）+灵活（各自领域服务对象）”形式开展慰问、走访活动，累计开展百余次；界别活动有“热度”：立足界别特点，开展“品宋韵文化 做精致丽人”、“味在香甜，意在畅想”等活动，古色古香的饰品制作、香甜有味的糕点烘焙让氛围持续加温；界别调研有“深度”：围绕全区经济社会发展的重要课题及人民群众关心的热点、难点问题开展调研视察，形成《关于建立上城区老字号建设保护》的集体提案以及《关于大力推广来料加工共富工坊 增加女性灵活就业机会》的调研报告。'
  },
  {
    id: '6',
    name: '工商联界',
    folder: '6工商联',
    contact_leader:'范国良',
    leader: '杨东（区委统战部副部长、区工商联党组书记）、胡伟强（杭州吉达控股有限公司总经理）',
    desc: '工商联界别共有委员26名。以促进民营经济健康发展和民营经济人士健康成长为目标，发挥界别特色，在杭州市委市政府召开世界杭商大会期间，利用委员自身联系企业广泛的优势，积极搭建商会桥梁，为钱江新城二期招引优质企业入驻贡献力量。委员们经过充分的调研，向界别群众征求意见和建议，借助区工商联（总商会）每年举办民企高级研修班，引导民营经济人士加强自我学习、自我教育、自我提升，学习贯彻党和国家的方针政策，弘扬企业家精神，爱国、敬业、创新、守法、诚信、贡献，做合格的中国特色社会主义事业建设者。'
  },
  {
    id: '7',
    name: '科技、科协界',
    folder: '7科技、科协',
    contact_leader:'洪明',
    leader: '方文伟（区总工会党组副书记、副主席）、聂建波（国网浙江综合能源公司双碳分公司（研究院），副总经理兼综合部主任，高级工程师、高级经济师）',
    desc: '科技、科协界别共有委员23名。切实发挥界别特色优势和服务高水平创新载体建设的有利条件，把高质量发展作为首要任务，聚焦科创赋能和改革提能两大主线, 以开放拓空间、向创新要活力，拿出更多首创办法、创新实践，推进科技创新平台建设。用好委员履职平台，彰显专业优势，围绕科技产业、科技人才、科技创新开展专题调研、专题视察、精准协商，发出界别声音，以高质量履职团结带领广大科技工作者，把实现自身价值融入科技强区建设新征程，在助力科技创新突破中展现新作为。'
  },
  {
    id: '8',
    name: '侨、台界',
    folder: '8侨、台',
    contact_leader:'许利萍',
    leader: '王渊（华侨基金管理有限公司执行总裁）、吴韵（浙江中弘国际旅行社有限公司总经理）',
    desc: '侨、台界别共有委员16名，由归侨侨眷、港澳台同胞及其眷属等代表人士组成。通过开展深入调研，参加政协会议、活动、协商，撰写社情民意和提案，为上城区的发展和侨台事务建言献策。加强对侨台胞的联谊和团结，凝聚侨心、汇聚侨智、发挥侨力。为助力共同富裕典范城区建设，界别委员成立“同心.共富”、“茗荟聚智”两家星级委员工作室，举办多元化特色活动，服务群众达上千余人次。近期，组织开展“春日繁花·书香浸润”读书会活动，以“书香政协”建设提升履职能力、凝聚思想共识、引领社会风尚。'
  },
  {
    id: '9',
    name: '新闻文体界',
    folder: '9新闻文体',
    contact_leader:'步汉英',
    leader: '赵韵红（区政协办公室主任）、徐志清（华语之声传媒（杭州）有限公司董事长）',
    desc: '新闻文体界别共有委员25名，由新闻、文化、体育等领域的委员组成。委员建言献策有深度、服务大局有担当、立足本职有特色，不断提升我区新闻文体领域影响力。亚运期间，委员们相继在本职工作中为亚运服务，有70%以上的委员积极投身到亚运会的宣传报道、文化交流、场馆服务、正能量宣传、舆情处置和引导等工作；同时，着力打造“宋韵今辉”城市文创品牌，助推宋韵文化活化转化，在城市阳台、河坊街、湖滨步行街等地方打造多个宋韵文化体验点，让文化与经济交融互动、融合发展，使经济文化化，文化经济化。'
  },
  {
    id: '10',
    name: '经济界',
    folder: '10经济',
    contact_leader:'洪明',
    leader: '胡丽亚（区发改经信局副局长）、王勇（区财政局数字财政管理科科长）',
    desc: '经济界别共有委员35名，由企业家、经信、商贸等领域的委员组成。坚持以“立足经济界别、服务经济建设、助推经济发展”为主线，整合有利资源，搭建合作平台，全力服务我区经济特色工作。开展“学两会精神，全力拼经济助发展”、钱江新城二期总部经济集聚区发展、湖滨时尚产业经济高质量发展等专题调研和协商，按照“自上而下了解情况、自下而上提出建议”的具体做法，收集大量一手资料和信息，向区政协第一届杭州市上城区委员会第三次会议提交1篇大会发言，委员共提交提案14篇，为上城区经济高质量建言献策。'
  },
  {
    id: '11',
    name: '环境资源和农业界',
    folder: '11环境资源和农业',
    contact_leader:'许利萍',
    leader: '熊义勤（杭州富硒农业技术研究院院长）、邵正刚（区政协城建委副主任）',
    desc: '环境资源和农业界别共有委员20名,主要由来自城建城管、环境资源和农业领域的企业家组成。环境资源和农业界别的委员们聚焦区委区政府核心任务，致力于城市发展建设，环境资源提升、农业经济发展：一是城市有机更新，强化城市美学与功能，带动高品质生活；二是加速"无废城市"进程，实践循环经济，强化废物管理与资源回收；三是赋能农业经济增长，通过技术创新与产业结构调整，提升产品价值，促进乡村产业融合，助力乡村振兴与环境可持续，全面促进社会经济绿色发展。凭借其专业背景与实践经验，为城市的高质量发展、环境资源的有效管理和农业经济的转型升级贡献智慧与力量，共同绘就生态文明建设和乡村振兴的美丽画卷。'
  },
  {
    id: '12',
    name: '教育界',
    folder: '12教育',
    contact_leader:'步汉英',
    leader: '许涛（区教育局党委副书记、副局长）、俞鑫红（区教育学院教研员）',
    desc: '教育界别共有委员19名。锚定“建设优质均衡、人民满意的美好教育引领区”目标，立足实际建真言，增进共识强交流、凝聚合力解难题。创新工作机制，两年来共开展专题调研32次，委员视察68次，形成调研报告52篇；广拓履职方式，通过专题协商、主题宣讲、入校调研等形式着力推进教育扩优提质、教育能级提升、解决群众急难愁盼等问题；打造特色品牌，青少年模拟政协活动已有1200余名学生参与其中，20余件“小提案”被政协委员作为正式提案提出，为青少年播下协商民主精神的种子。'
  },
  {
    id: '13',
    name: '医卫界',
    folder: '13医卫',
    contact_leader:'步汉英',
    leader: '陶晖（区卫健局党委委员、副局长）、李祖胜（九堡街道社区卫生服务中心主任）',
    desc: '医卫界别共有委员22名。不断探索委员联系界别群众机制，围绕区委区政府重点工作积极履职，尤其在全区中医药事业传承创新发展方面开展深入调研，积极打造“好中医在上城”品牌，努力实现“基层中医化、中医生活化”。形成点上有风韵、线上有风光、面上有风景的中医药工作格局，以实践实干实绩推动我区卫生健康现代化建设先行。在“市政协新时代协商民主实践中心上城活动周”启动仪式积极展示医卫界别特色工作，现场以中医四季养生手绘明信片、中医养生茶饮、中医脉络分析仪、中医适宜技术体验等中医药特色体验为载体，将中医文化、中医科普和中医养生有机融合，全方位带来中医“沉浸式”体验，解锁中医药“潮玩法”，让千年中医智慧走进现代生活。展台受到各界别代表的广泛欢迎，体验人群络绎不绝，累积服务120余人次。'
  },
  {
    id: '14',
    name: '社会福利和保障界',
    folder: '14社会福利和保障',
    contact_leader:'楼玉宇',
    leader: '桑丽（区残疾人联合会党组书记、理事长）、平原（区民政局党委委员、副局长）',
    desc: '社会福利和保障界别共有委员19名。以界别工作室为平台，以“特有爱”幸福体验馆为阵地，凝结省市区各方资源启动“特有爱·连锁市集”就业增收保障计划，获得国家级荣誉2个。联动卫健、教育、民政等部门资源，在全市创新构建“家庭+机构+学校+社区”孤独症儿童关爱体系；在“特有爱”幸福体验馆常态化举办主题市集、研学、义诊等爱的教育活动40场，吸引1400余人参与；联动邵逸夫医院、市商旅集团等爱心单位广泛联系界别群众，开展“以爱之名”等残疾人画展及手工艺品义卖活动7场，销售额超6万余元；《突出界别优势、发挥委员作用，界别联动助推残疾人康复服务向康养结合迈进》获省政协副主席蔡秀军批示肯定。'
  },
  {
    id: '15',
    name: '民族、宗教界',
    folder: '15民宗',
    contact_leader:'楼玉宇',
    leader: '许春波（区民族团结促进会副会长，杭州市书刊发行业协会会长）、王翔（四季青街道钱塘社区党委书记、居委会主任）',
    desc: '民族、宗教界别共有委员11名。在中国共产党的领导下，发挥界别优势，促进民族团结、宗教和谐，善于帮助党委政府做好化解矛盾、维护稳定，密切同广大宗教界人士的联系，加强沟通交流，及时反映他们关注的问题，形成共识、增进共识和传播共识。聚焦民族宗教领域重点难点，深入调查研究，积极搭建平台，开展协商建言，进一步发挥好在促进各民族交往交流交融中的引领带动作用，增强为群众办实事、做好事、解难事的本领，不断增进与界别群众的联系和感情，自觉为找到最大公约数、画出最大同心圆作出努力。'
  },
  {
    id: '16',
    name: '特邀界',
    folder: '16特邀',
    contact_leader:'孙国方、王良约',
    leader: '张瑞光（区综合行政执法局党委副书记、副局长）',
    desc: '特邀界别共有委员30名。特邀界别成立以来，始终坚持党建引领，将界别优势转化为履职实效，围绕中心大局、聚焦民生关切，形成“协商有深度、建言有温度、落实有力度”的履职格局。在协商议事方面，先后联合闸弄口、南星等街道开展专题协商，聚焦党群服务中心集成改革、民生实事、公共服务优享等议题，推动基层治理提质增效。围绕德寿宫周边环境提升、机动车泊位建设等形成集体提案，为街道决策提供有效支撑。在服务民生方面，提出《关于探索流动摊贩有序规范管理的建议》，推动“烟火味”与“文明味”有机融合；积极参与老旧燃气管道更新改造等民生实事项目征集，推动城市安全与品质双提升。在助推发展方面，联合民进上城区基层委员会、区综合行政执法局开展营商环境专题协商，调研湖滨步行街“为企办实事”举措，助力商业外摆、特色售卖等政策落地，形成“部门联动、委员参与、企业受益”的良好局面。界别履职特色鲜明、示范效应初显，持续擦亮特邀界别协商议事金名片。'
  }
];

const SectorInfo = () => {
  const [activeSector, setActiveSector] = useState(sectorConfig[0]);
  const [photos, setPhotos] = useState([]);

  // --- 1. 照片数据配置 (在这里维护每个界别的照片) ---
  const fileMap = {
    '1': [
      '2022.12.06 中共界别委员交流活动.webp',
      '2024.02.02 区政协一届三次会议中共界别小组讨论会.webp'
    ],
    '2': [
      '参加老旧小区物业提质协商议事.webp',
      '范国良副主席参加无党派界别“洞悉当前宏观经济态势与战略投资机遇”主题分享活动.webp',
      '范国良副主席为老字号工作室揭牌.webp',
      '无党派界别赴区司法局调研涉外法律服务有关工作 .webp',
      '重阳节开展为老服务.webp'
    ],
    '3': [
      '图片1.webp',
      '图片2.webp',
      '图片3.webp',
      '图片4.webp'
    ],
    '4': [
      '5月25日2024年上城区职工毅行大会.webp',
      '5月25日2024年上城区职工毅行大会2.webp',
      '2024年5月6日 上工大讲堂.webp'
    ],
    '5': [
      '妇联界别调研牵头人高艳霞带队调研白马庄巾帼共富工坊，为调研报告积累素材.webp',
      '妇联界别开展“品宋韵文化  做精致丽人”三八节活动.webp',
      '妇联界别召集人吕仕琼开展“七一”慰问.webp',
      '政协一届三次会议，妇联界别民宗界别合影.webp'
    ],
    '6': [
      '深圳浙江商会考察钱二图片.webp',
      '主体培训班合影.webp',
      '组织民企500强部分人员参观考察钱二.webp'
    ],
    '7': [
      '图片1.webp',
      '图片2.webp'
    ],
    '8': [
      '图片1.webp',
      '图片2.webp',
      '图片3.webp'
    ],
    '9': [
      '2023年8月，参观亚运会博物馆.webp',
      '2023年8月，参观亚运会博物馆2.webp'
    ],
    '10': [
      '图片1.webp',
      '图片2.webp'
    ],
    '11': [
      '图片1.webp',
      '图片2.webp',
      '图片3.webp',
      '图片4.webp'
    ],
    '12': [
      '图片1.webp',
      '图片2.webp'
    ],
    '13': [
      '图片1.webp',
      '图片2.webp',
      '图片3.webp',
      '图片4.webp'
    ],
    '14': [
      '联动邵逸夫医院，开展“以爱之名”等残疾人画展及手工艺品义卖活动.webp',
      '区政府副主席范国良与政协委员参观社会福利和保障界别委员工作室.webp',
      '社会福利和保障界别委员联系界别群众参加党纪学习教育.webp'
    ],
    '15': [
      '图片1.webp',
      '图片2.webp'
    ],
    '16': [
      '开展读书会.webp',
      '现场调研德寿宫附近停车泊位情况.webp',
      '现场调研湖滨步行街营商环境提升项目.webp',
      '与商户开展座谈.webp',
      '针对德寿宫周边一件事情况进行座谈.webp'
    ]
  };

  // --- 2. 图片加载逻辑 ---
  useEffect(() => {
    const loadPhotos = () => {
      const folder = activeSector.folder;
      const fileNames = fileMap[activeSector.id] || [];

      const newPhotos = fileNames.map((fileName, index) => ({
        id: index,
        // 使用 encodeURI 处理中文文件名和空格，防止路径报错
        url: `public/photos/${folder}/${encodeURI(fileName)}`,
        // 去掉后缀作为描述文字
        desc: fileName.replace('.webp', '')
      }));

      setPhotos(newPhotos);
    };

    loadPhotos();
  }, [activeSector]);

  // --- 3. 样式定义 (保持原有布局风格) ---
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh'
    },
    mainTitle: {
      textAlign: 'center',
      color: '#1890ff',
      marginBottom: '30px',
      borderBottom: '3px solid #1890ff',
      display: 'inline-block',
      padding: '0 20px'
    },
    layout: {
      display: 'flex',
      gap: '30px',
      marginTop: '10px'
    },
    sidebar: {
      width: '220px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flexShrink: 0,
      maxHeight: '800px',
      overflowY: 'auto',
      paddingRight: '5px'
    },
    navBtn: {
      padding: '12px 15px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '500',
      transition: 'all 0.2s',
      textAlign: 'left',
      outline: 'none',
      boxShadow: '0 2px 0 rgba(0,0,0,0.02)'
    },
    content: {
      flex: 1,
      minWidth: 0
    },
    infoCard: {
      padding: '30px',
      marginBottom: '30px',
      borderRadius: '8px',
      borderLeft: '6px solid #1890ff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff'
    },
    infoTitle: {
      color: '#1890ff',
      marginBottom: '15px',
      borderBottom: '1px dashed #eee',
      paddingBottom: '10px',
      fontSize: '24px',
      marginTop: 0
    },
    metaInfo: {
      marginBottom: '15px',
      fontSize: '15px',
      color: '#333'
    },
    tag: {
      backgroundColor: '#e6f7ff',
      color: '#1890ff',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      marginRight: '8px'
    },
    descContainer: {
      maxHeight: '300px',
      overflowY: 'auto',
      paddingRight: '10px',
      lineHeight: '1.8',
      color: '#444',
      textAlign: 'justify',
      fontSize: '15px'
    },
    photoSection: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    },
    photoTitle: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '20px',
      paddingLeft: '10px',
      borderLeft: '4px solid #1890ff',
      marginTop: 0
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // 响应式网格
      gap: '20px'
    },
    photoCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #eee',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s',
      display: 'flex',
      flexDirection: 'column'
    },
    img: {
      width: '100%',
      height: '200px',
      objectFit: 'cover', // 保持图片比例填充
      display: 'block'
    },
    caption: {
      padding: '12px',
      fontSize: '14px',
      color: '#555',
      lineHeight: '1.5',
      backgroundColor: '#fafafa',
      borderTop: '1px solid #f0f0f0',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainTitle}>{activeSector.name}详情</div>

      <div style={styles.layout}>
        {/* --- 左侧：界别导航 --- */}
        <div style={styles.sidebar}>
          {sectorConfig.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector)}
              style={{
                ...styles.navBtn,
                backgroundColor: activeSector.id === sector.id ? '#1890ff' : '#fff',
                color: activeSector.id === sector.id ? '#fff' : '#333',
                border: activeSector.id === sector.id ? 'none' : '1px solid #ddd'
              }}
            >
              {sector.name}
            </button>
          ))}
        </div>

        {/* --- 右侧：详情与照片 --- */}
        <div style={styles.content}>
          {/* 基本信息卡片 */}
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>{activeSector.name}</h3>
            <div style={styles.metaInfo}>
              <span style={styles.tag}>区政协联系领导：{activeSector.contact_leader}</span>
            </div>
            <div style={styles.metaInfo}>
              <span style={styles.tag}>界别召集人：{activeSector.leader}</span>
            </div>
            <div style={styles.descContainer}>
              <p style={{ margin: 0 }}>{activeSector.desc}</p>
            </div>
          </div>

          {/* 照片展示区 */}
          <div style={styles.photoSection}>
            <div style={styles.photoTitle}>活动剪影</div>
            <div style={styles.grid}>
              {photos.length > 0 ? (
                photos.map((photo) => (
                  <div key={photo.id} style={styles.photoCard}>
                    <img
                      src={photo.url}
                      alt={photo.desc}
                      style={styles.img}
                    />
                    <div style={styles.caption}>
                      {photo.desc}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999', padding: '40px' }}>
                  暂无活动照片
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorInfo;