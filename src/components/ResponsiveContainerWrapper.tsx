import { Box } from '@mui/material';
import { ResponsiveContainer } from 'recharts';
import { styled } from '@mui/system';

const Parent = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
});

const Child = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
});

type Props = {
  children: JSX.Element;
};

const ResponsiveContainerWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Parent>
      <Child>
        <ResponsiveContainer width="99%" height="100%">
          {children}
        </ResponsiveContainer>
      </Child>
    </Parent>
  );
};

export default ResponsiveContainerWrapper;
