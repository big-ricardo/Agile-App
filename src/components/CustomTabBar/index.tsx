import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { TabArea, TabItem, TabItemCenter, AvatarIcon } from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
import { UserContext } from '../../contexts/User';

const CustomTabBar = ({ state, navigation }) => {
  const theme = useContext(ThemeContext);
  const { state: user } = useContext(UserContext);

  function goTo(screenName) {
    navigation.navigate(screenName);
  }

  const Icon = ({ IconSvg, ...props }) => (
    <IconSvg width="24" height="24" {...props} />
  );

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          IconSvg={HomeIcon}
          fill={theme.textInverted}
          style={{ opacity: state.index === 0 ? 1 : 0.7 }}
        />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <Icon
          IconSvg={SearchIcon}
          fill={theme.textInverted}
          style={{ opacity: state.index === 1 ? 1 : 0.7 }}
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Appointments')}>
        <Icon
          IconSvg={TodayIcon}
          fill={state.index === 2 ? theme.second : theme.primary}
          width="32"
          height="32"
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <Icon
          IconSvg={FavoriteIcon}
          fill={theme.textInverted}
          style={{ opacity: state.index === 3 ? 1 : 0.7 }}
        />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar != '' ? (
          <AvatarIcon source={{uri: user.avatar}} />
        ) : (
          <Icon
            IconSvg={AccountIcon}
            fill={theme.textInverted}
            style={{ opacity: state.index === 4 ? 1 : 0.7 }}
          />
        )}
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;
