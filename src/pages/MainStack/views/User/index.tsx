import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import Api from '../../../../services/Api';
import Stars from '../../../../components/Stars';

import {
  Container,
  LoadingIcon,
  Scroller,
  Body,
  Depositions,
  BackBotton,
  UserFavBotton,
} from './styles';

import { Services, MySwiper, User } from './styles';

import FavoriteIcon from '../../../../assets/favorite.svg';
import FavoriteFullIcon from '../../../../assets/favorite_full.svg';
import BackIcon from '../../../../assets/back.svg';
import PrevIcon from '../../../../assets/nav_prev.svg';
import NextIcon from '../../../../assets/nav_next.svg';

import { ThemeContext } from 'styled-components';
import Modal from '../../../../components/Modal';
import UserProps from '../../../../interfaces/User';

const UserComp = () => {
  const navigation = useNavigation();
  const route:RouteProp<{params:UserProps}, 'params'> = useRoute();
  const theme = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectService, setSelectService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState<UserProps | null>({
    id: route.params.id,
    name: route.params.name,
    avatar: route.params.avatar,
    stars: route.params.stars,
  });

  async function handleFavClick() {
    setFavorited(!favorited);
  }

  function handleChoose(i) {
    setSelectService(i);
    setShowModal(true);
  }

  useEffect(() => {
    async function getInfo() {
      setLoading(true);
      const response = await Api.getUser(user.id);

      if (response.error == '') {
        setUser(response.data);
        setFavorited(response.data.favorited);
      } else {
        Alert.alert('Erro:' + response.error);
      }
      setLoading(false);
    }
    getInfo();
  }, []);

  return (
    <Container>
      <Scroller>
        {user.photos && user.photos.length > 0 ? (
          <Swiper
            style={{ height: 240 }}
            dot={<MySwiper.Dot />}
            activeDot={<MySwiper.DotActive />}
            paginationStyle={{
              top: 15,
              right: 15,
              bottom: null,
              left: null,
            }}
            autoplay={true}
            loop={true}
          >
            {user.photos.map((photo: any, i) => (
              <MySwiper.Item key={i}>
                {i < 4 && (
                  <>
                    <MySwiper.Img
                      source={{ uri: photo.url }}
                      resizeMode="cover"
                    />
                  </>
                )}
              </MySwiper.Item>
            ))}
          </Swiper>
        ) : (
          <MySwiper.Fake />
        )}

        <Body>
          <User.Container>
            <User.Avatar source={{ uri: user?.avatar }} />
            <User.Info>
              <User.Name>{user.name}</User.Name>
              <Stars stars={user.stars} showNumber={true} />
            </User.Info>
            <UserFavBotton onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="tomato" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="tomato" />
              )}
            </UserFavBotton>
          </User.Container>

          {loading && <LoadingIcon size="large" color={theme.primary} />}

          <Services.Container>
            {user.services && user.services.length > 0 && (
              <>
                <Services.Title>Lista de serviços</Services.Title>
                {user.services.map((service: any, i) => (
                  <Services.Item key={i}>
                    <Services.Info>
                      <Services.Name>{service.name}</Services.Name>
                      <Services.Price>R$ {service.price}</Services.Price>
                    </Services.Info>
                    <Services.Buttom
                      onPress={() => {
                        handleChoose(i);
                      }}
                    >
                      <Services.ButtomText>Agendar</Services.ButtomText>
                    </Services.Buttom>
                  </Services.Item>
                ))}
              </>
            )}
          </Services.Container>

          {user.testimonials && user.testimonials.length > 0 && (
            <Depositions.Container>
              <Swiper
                style={{ height: 110 }}
                showsPagination={false}
                showsButtons={true}
                prevButton={
                  <PrevIcon width="35" height="35" fill={theme.primary} />
                }
                nextButton={
                  <NextIcon width="35" height="35" fill={theme.primary} />
                }
              >
                {user.testimonials.map((item: any, i) => (
                  <Depositions.Item key={i}>
                    <Depositions.Info>
                      <Depositions.Name>{item.name}</Depositions.Name>
                      <Stars stars={item.rate} showNumber={false} />
                    </Depositions.Info>
                    <Depositions.Body>{item.body}</Depositions.Body>
                  </Depositions.Item>
                ))}
              </Swiper>
            </Depositions.Container>
          )}
        </Body>
      </Scroller>
      <BackBotton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon width="44" height="44" fill="#fff" />
      </BackBotton>

      <Modal
        show={showModal}
        setShow={setShowModal}
        user={user}
        service={selectService}
      />
    </Container>
  );
};

export default UserComp;
