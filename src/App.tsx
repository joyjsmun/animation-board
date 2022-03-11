import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
 width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background-color:white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
`;


const boxVariants = {
 drag:{backgroundColor:"rgb(108, 92, 231)"}
};



function App() {
  const mv = useMotionValue(0);
  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress,[0,1],[0.1,5])
 
  const rotateZ = useTransform(mv, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    mv,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  return (
    <Wrapper style={{ background: gradient }}>
     <Box style={{x:mv,rotateZ,scale}} drag="x" dragSnapToOrigin variants={boxVariants} />
     </Wrapper>
  );
}

export default App;