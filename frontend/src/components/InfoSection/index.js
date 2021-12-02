import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import '../Button/Button.css';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, Img} from './InfoElements';
// import Table from '../User-Home/Table';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, dark, buttonLabel, buttonLabel2, linkto1, linkto2, table  }) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <div className='mobile--btn'>
                            <Link to={linkto1}>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    {buttonLabel}
                                </Button>
                            </Link>
                            <Link to={linkto2}>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    {buttonLabel2}
                                </Button>
                            </Link>
                            </div>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>

        </>
    );
}

export default InfoSection;
