'use client'

import styled from "styled-components";
import { SyntheticEvent } from "react";
import Image from "next/image";
import { getFirstImage } from '@/utils/getFirstImage';

interface ResponsiveImageStyleProps {
  aspectratio?: number | "auto";
}


interface Props extends ResponsiveImageStyleProps {
  src?: string | null;
  height?: string;
  className?: string;
}

function HeightAutoImg({src, height, className, aspectratio = "auto"}: Props) {

  const imageOnErrorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "/img/newpick_default_img.jpg";
  }
  return (
    <ContainerStyled height={height} className={className} >
      <ThumbImgStyled
        src={src ? getFirstImage(src) : "/img/newpick_default_img.jpg"}
        alt="news-img"
        loading="lazy"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        aspectratio={aspectratio}
        onError={imageOnErrorHandler}
      />
    </ContainerStyled>
  );
}

const ThumbImgStyled = styled(Image)<Props>`
    position: relative !important;
    display: block;
    height: unset !important;
    width: 100%;

    //max-height: 24rem;
    //min-height: 2rem;

    object-fit: cover;
    content-visibility: auto;
    object-position: center;

    aspect-ratio: ${({aspectratio}) => aspectratio};

`;

const ContainerStyled = styled.div<Props>`
    position: relative;
    overflow: hidden;
    border-radius: ${({theme}) => theme.borderRadius.soft};

    height: ${({height}) => height};
`

export default HeightAutoImg;