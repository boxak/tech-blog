import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled('div')(() => ({
  width: '100%',
  backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
  color: '#ffffff',
}))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const AboutMeLink = styled(Link)`
  font-size: 20px;
  line-height: 50px;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>이젠 프론트엔드야</SubTitle>
          <Title>프론트 엔드 주니어 개발 블로그입니다</Title>
          <AboutMeLink to={'/who_am_I'}>
            <FontAwesomeIcon icon={faArrowRight} />
            Who am I?
          </AboutMeLink>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
