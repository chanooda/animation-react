import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: white;
    display: block;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 500px;
  }
`;

const SharedLayout = () => {
  const [id, setId] = useState<string | null>(null);
  const onClick = () => {
    setId(null);
  };
  return (
    <Wrapper>
      <Link to="/deep">Deep</Link>
      <Link to="/">Home</Link>
      <Link to="/slider">Slider</Link>
      <Grid>
        {["1", "2", "3", "4"].map((el) => (
          <Box onClick={() => setId(el)} key={el} layoutId={el}>
            {el}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default SharedLayout;
