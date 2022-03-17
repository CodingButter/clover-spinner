import settings from "../../config/settings.json";
import styled from "styled-components";
import { Button, Container } from "../global";
const {
  machine: { rollers },
} = settings;
export const Machine = styled(Container)`
  height: 100%;
  max-width: 800px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GoButton = styled(Button)`
  width: 100px;
  padding: 10px;
  position: absolute;
  bottom: 10px;
`;

export const RollersContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  border: 5px solid
    ${({
      theme: {
        secondary: { lighter },
      },
    }) => lighter};
  background: ${({ theme: { secondary } }) => secondary.darker};
  box-shadow: inset 0px 10px 9px 2px rgb(0 0 0 / 52%);
`;

export const RollerContainer = styled(Container)`
  justify-content: center;
  align-items: middle;
  position: relative;
  height: ${rollers.height * 7}px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme: { secondary } }) => secondary.default};
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 80%);
  border: inset 4px solid black;
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background: black;
    position: absolute;
    top: 50%;
  }
`;

export const RollerWindow = styled(Container)`
  position: relative;
  &::before {
    position: absolute;
    z-index: 100;
    content: "";
    height: ${rollers.height * 7}px;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.746096) 11%,
      rgba(255, 255, 255, 0.3) 18%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const List = styled.ul`
  position: absolute;
  width: 100%;
  height: ${rollers.height * 7}px;
  overflow: hidden;
  /*&::after {
    content: "${({ doorText }) => doorText}";
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-delay: 1s;
    transition: bottom 1s;
    text-align: center;
    font-weight: bold;
    text-shadow: ${rollers.text.border};
    font-size: ${rollers.text.size};
    background-image: url("${rollers.door.image}");
    bottom: ${({ run }) => (run ? 100 : 0)}%;
    color: theme.background.darker;
  }*/
`;

export const ListItem = styled.li.attrs(({ angle, timing, radius, run }) => ({
  style: {
    transform: `rotateX(${angle}deg)`,
    transformOrigin: `0px ${rollers.height}px ${radius}px`,
    transition: run ? `transform ${timing}s` : "initial",
    transitionTimingFunction: run
      ? `cubic-bezier(${Object.keys(rollers.easing)
          .map((key) => rollers.easing[key])
          .join(", ")})`
      : "initial",
  },
}))`
font-size: ${rollers.text.size};
text-shadow: ${rollers.text.border};

  color: ${({ theme }) => theme.background.darker};
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: ${rollers.height}px;
  text-align: center;
  backface-visibility: hidden;
  &::before{
    z-index: -3;
    top: 0px;
    background: white;
    background-size:${rollers.background.scale}%;
    opacity: ${rollers.background.opacity};
    position: absolute;
    width: 100%;
    height: 1px;
    content: "";
    bottom:5%;
  }
}`;
