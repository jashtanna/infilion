import React, { useState } from 'react';
import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';
import Tab3Content from './Tab3Content';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userActions';
import { AppDispatch, RootState } from '../redux/store';

const TabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const dispatch = useDispatch<AppDispatch>();
  const apiData = useSelector((state: RootState) => state.user.data);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleButtonClick = () => {
    setActiveTab('tab3');
    dispatch(fetchUsers());
  };

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <Tab1Content />}
        {activeTab === 'tab2' && <Tab2Content onButtonClick={handleButtonClick} />}
        {activeTab === 'tab3' && <Tab3Content data={apiData} />}
      </div>
    </div>
  );
};

export default TabView;
