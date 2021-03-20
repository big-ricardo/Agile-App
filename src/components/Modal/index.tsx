import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Modal, Container, Body, CloseButton, Item, User, Service, DateInfo, FinishButton, FinishButtonText, LoadingIcon, Hours } from './styles';

import CloseIcon from '../../assets/expand.svg'
import PrevIcon from '../../assets/nav_prev.svg'
import NextIcon from '../../assets/nav_next.svg'

import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/core';

const Months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const Days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const ModalComp = ({ show, setShow, user, service }) => {
    const theme = useContext(ThemeContext)
    const navigation = useNavigation()

    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedHour, setSelectedHour] = useState(null)
    const [listDays, setListDays] = useState([])
    const [listHours, setListHours] = useState([])

    useEffect(() => {
        const today = new Date()
        setSelectedYear(today.getFullYear())
        setSelectedMonth(today.getMonth())
        setSelectedDay(today.getDate())

    }, [])

    useEffect(() => {
        if (user.available) {
            setListDays([])
            const getList = async () => {
                const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate()
                let newListDays = []
                for (let i = 1; i <= daysInMonth; i++) {

                    const [availability, d] = defineDate(i)

                    newListDays.push({
                        status: availability.length > 0 ? true : false,
                        weekday: Days[d.getDay()],
                        number: i,
                    })

                }
                setListDays(newListDays)
                setSelectedDay(0)
                setListHours([])
                setSelectedHour(0)
            }
            setTimeout(() => { getList() }, 10)
        }
    }, [selectedMonth, user])

    useEffect(() => {
        if (user.available && selectedDay > 0) {
            setSelectedHour(null)
            setListHours([])

            const [availability] = defineDate(selectedDay)

            if (availability.length > 0) {
                setListHours(availability[0].hours)
            }

        }
    }, [selectedDay, user])

    function defineDate(_day) {
        const d = new Date(selectedYear, selectedMonth, _day)
        const year = d.getFullYear()
        const month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth()+1) : d.getMonth() + 1
        const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
        const selDate = `${year}-${month}-${day}`

        const availability = user.available.filter(e => {
            return e.date == selDate
        })

        return [availability, d]
    }

    function handlePrevDate() {
        const mountDate = new Date(selectedYear, selectedMonth, 1);

        mountDate.setMonth(mountDate.getMonth() - 1)

        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
        setListHours([])

    }

    function handleNextDate() {
        const mountDate = new Date(selectedYear, selectedMonth, 1);

        mountDate.setMonth(mountDate.getMonth() + 1)

        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
        setListHours([])
    }

    async function handleSubmit() {
        if (
            user.id &&
            service !== null &&
            selectedYear > 0 &&
            selectedMonth > 0 &&
            selectedDay > 0 &&
            selectedHour !== null
        ) {
            // const response = await Api.setAppointments(
            //     user.id,
            //     service,
            //     selectedYear,
            //     selectedMonth,
            //     selectedHour,
            //     selectedDay
            // );

            const response = { error: 'sucess' }

            if (response.error !== '') {
                setShow(false)
                navigation.navigate('Appointments')
            } else {
                Alert.alert(response.error)
            }
            setShow(false)

        } else {
            Alert.alert("Preencha todos os dados!")
        }
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType='slide'
        >
            <Container>
                <Body>
                    <CloseButton onPress={() => setShow(false)}>
                        <CloseIcon width='40' height='40' fill={theme.text} />
                    </CloseButton>

                    <Item>
                        <User.Container>
                            <User.Avatar source={{ uri: user.avatar }} />
                            <User.Name>{user.name}</User.Name>
                        </User.Container>
                    </Item>
                    {service != null && (
                        <Item>
                            <Service.Container>
                                <Service.Name>{user.services[service].name}</Service.Name>
                                <Service.Price>R$ {user.services[service].price}</Service.Price>
                            </Service.Container>
                        </Item>
                    )}

                    <Item>
                        <DateInfo.Container>
                            <DateInfo.Prev onPress={handlePrevDate}>
                                <PrevIcon width='35' height='35' fill={theme.primary} />
                            </DateInfo.Prev>
                            <DateInfo.Title>{Months[selectedMonth]} {selectedYear}</DateInfo.Title>
                            <DateInfo.Next onPress={handleNextDate}>
                                <NextIcon width='35' height='35' fill={theme.primary} />
                            </DateInfo.Next>
                        </DateInfo.Container>

                        <DateInfo.Container>

                            {listDays.length > 0 ? (
                                <DateInfo.List horizontal={true} showsHorizontalScrollIndicator={false}>

                                    {listDays.map((item, i) => (
                                        <DateInfo.Item key={i}
                                            onPress={() => item.status ? setSelectedDay(item.number) : null}
                                            style={{
                                                backgroundColor: selectedDay === item.number ? theme.primary : null,
                                                opacity: item.status ? 1 : 0.3
                                            }}
                                        >
                                            <DateInfo.Weekday
                                                style={{
                                                    color: selectedDay === item.number ? theme.textInverted : theme.tabColor
                                                }}
                                            > {item.weekday} </DateInfo.Weekday>
                                            <DateInfo.Number
                                                style={{
                                                    color: selectedDay === item.number ? theme.textInverted : theme.tabColor
                                                }}
                                            > {item.number} </DateInfo.Number>
                                        </DateInfo.Item>
                                    ))}
                                </DateInfo.List>

                            ) : (
                                <DateInfo.Loading>
                                    <LoadingIcon size='large' color={theme.primary} />
                                </DateInfo.Loading>
                            )}
                        </DateInfo.Container>
                    </Item>

                    {listDays.length > 0 && listHours.length > 0 && (
                        <Item>
                            <Hours.List horizontal={true} showsHorizontalScrollIndicator={false}>
                                {listHours.map((item, i) => (
                                    <Hours.Item key={i}
                                        onPress={() => setSelectedHour(item)}
                                        style={{
                                            backgroundColor: selectedHour === item ? theme.primary : null,
                                        }}
                                    >
                                        <Hours.Text
                                            style={{
                                                color: selectedHour === item ? theme.textInverted : theme.tabColor
                                            }}
                                        >{item}</Hours.Text>
                                    </Hours.Item>
                                ))}
                            </Hours.List>

                        </Item>
                    )}

                    <FinishButton onPress={handleSubmit}>
                        <FinishButtonText>Solicitar Agendamento</FinishButtonText>
                    </FinishButton>

                </Body>
            </Container>
        </Modal>
    );
}

export default ModalComp;
