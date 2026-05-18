import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext'; // 引入 DataProvider

// 1. 确保这里导入了 ALL 页面组件 (不要漏掉 NewEra 等)
import Home from './pages/Home'; 
import MemberHome from './pages/MemberHome'; 
import StreetGroup from './pages/StreetGroup'; 
import SectorInfo from './pages/SectorInfo'; 
import NewEra from './pages/NewEra';       // <--- 检查这行是否存在
import Performance from './pages/Performance'; 
import StarStudio from './pages/StarStudio'; 
import Plan2026 from './pages/Plan2026'; 

// 导航高亮组件
const NavLinkItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
};

function App() {
  return (
    // 2. DataProvider 包裹整个应用
    <DataProvider>
      <div className="app">
        {/* 顶部通栏 */}
        <div className="top-bar">欢迎访问浙江省杭州市政协委员通履职服务平台</div>

        {/* 头部 Logo */}
        <header className="main-header">
          <h1>浙江省杭州市政协委员通</h1>
        </header>

        {/* 导航栏 */}
        <nav className="nav-bar">
          <NavLinkItem to="/">首页</NavLinkItem>
          <NavLinkItem to="/member-home">委员之家</NavLinkItem>
          <NavLinkItem to="/street-group">街道委员小组</NavLinkItem>
          <NavLinkItem to="/sector-info">界别基本情况</NavLinkItem>
          <NavLinkItem to="/new-era">市政协新时代协商民主实践-上城分中心</NavLinkItem>
          <NavLinkItem to="/performance">委员履职平台</NavLinkItem>
          <NavLinkItem to="/star-studio">星级委员工作室</NavLinkItem>
          <NavLinkItem to="/plan-2026">2026年履职计划</NavLinkItem>
        </nav>

        {/* 内容区域：路由出口 */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member-home" element={<MemberHome />} />
            <Route path="/street-group" element={<StreetGroup />} />
            <Route path="/sector-info" element={<SectorInfo />} />
            <Route path="/new-era" element={<NewEra />} />      
            <Route path="/performance" element={<Performance />} />
            <Route path="/star-studio" element={<StarStudio />} />
            <Route path="/plan-2026" element={<Plan2026 />} />
          </Routes>
        </main>

        {/* 底部 */}
        <footer className="footer">
          <p>© 2026 浙江省杭州市政协委员 || 版权所有</p>
        </footer>
      </div>
    </DataProvider>
  );
}

export default App;