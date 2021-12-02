import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#EEEEEE' : '#010606')};

  @media screen and (max-width: 768px){
      padding: 100px 0;
  }

`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: fit-content;/*1200px;*/
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  @media screen and (max-width: 1600px){
       grid-gap: 280px;
  }
  @media screen and (max-width: 1300px){
      grid-gap: 180px;
    }
    @media screen and (max-width: 960px){
        grid-auto-columns: minmax(auto,auto);
        grid-gap: 0;
    }
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
      grid-auto-columns: minmax(auto, 0.5fr);
      grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  padding-right: 0;
  padding-left: 0;
  grid-area: col1;
`

export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  padding-right: 0;
  padding-left: 0;
  grid-area: col2;
    @media screen and (max-width: 768px){
    padding-bottom: 200px;
  }

`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px){
    padding-bottom: none;
  }
`

export const TopLine = styled.p`
  color: #222222;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#222222' : '#222222')};

  @media screen and (max-width: 1300px){
      font-size: 44px;
  }

  @media screen and (max-width: 480px){
      font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 28px;
  color: ${({ darkText }) => (darkText ? '#222222' : '#fff')};
`

export const ImgWrap = styled.div`
  max-width: 555px;  
  height: 100%;
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
