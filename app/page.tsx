import AppLayout from './components/AppLayout';
import ProfileHeader from './ProfileHeader';
import ProfileSubscriptions from './ProfileSubscriptions';

export const revalidate = 60;

export default function Home() {
  return (
    <AppLayout>
      <ProfileHeader/>
      <ProfileSubscriptions/>
    </AppLayout>
  );
}
