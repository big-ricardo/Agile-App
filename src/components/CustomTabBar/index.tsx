import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native'

import { TabArea, TabItem, TabItemCenter } from './styles';

import HomeIcon from '../../assets/home.svg'
import SearchIcon from '../../assets/search.svg'
import TodayIcon from '../../assets/today.svg'
import FavoriteIcon from '../../assets/favorite.svg'
import AccountIcon from '../../assets/account.svg'

const CustomTabBar = ({ state, navigation }) => {
    const theme = useContext(ThemeContext)

    function goTo(screenName) {
        navigation.navigate(screenName)
    }

    const Icon = ({ IconSvg, ...props }) => (
      <IconSvg width='24' height='24' {...props} />
  )

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <Icon IconSvg={HomeIcon} fill={theme.textInverted} style={{ opacity: state.index === 0 ? 1 : .5 }} />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <Icon IconSvg={SearchIcon} fill={theme.textInverted} style={{ opacity: state.index === 1 ? 1 : .5 }} />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <Icon IconSvg={TodayIcon} fill={theme.tabColor} width='32' height='32' />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <Icon IconSvg={FavoriteIcon} fill={theme.textInverted} style={{ opacity: state.index === 3 ? 1 : .5 }} />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <Icon IconSvg={AccountIcon} fill={theme.textInverted} style={{ opacity: state.index === 4 ? 1 : .5 }} />
            </TabItem>
        </TabArea>
    );
}

export default CustomTabBar;
