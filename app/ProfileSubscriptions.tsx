import {AppConfig} from './config/app.config';

export default function ProfileSubscriptions() {
  return <div className={'p-4 bg-white my-2'}>
    <div className={'text-neutral-500 font-medium'}>
      SUBSCRIPTION
    </div>
    <div className={'flex flex-col gap-2 mt-4'}>
      {AppConfig.subscriptions.map(sub => (
        <a
          href={'/contact'}
          >
          <span className={'uppercase'}>{sub.name}</span>
          <span className={'uppercase'}>{sub.price}</span>
        </a>
      ))}
    </div>
  </div>
}
