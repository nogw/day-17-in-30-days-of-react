import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-color: #fff;
  width: 140px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
  margin: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  font-family: monospace;
  font-weight: bold;
  font-size: 14px;
`;

export const Color = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  background-color: rgb(${props => props.bgc});
  border-radius: 10px;
  margin: 10px;
  height: 130px;
  width: 100px;
`;

export const Name = styled.div`

`;
