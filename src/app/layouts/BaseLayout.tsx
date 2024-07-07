import { Header } from '@/widgets/header/ui';
import { useTheme } from '../providers/ThemeProvider';
import Main from '@/pages/main/ui/Page';

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default BaseLayout;
