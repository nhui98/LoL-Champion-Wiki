import { PlaystyleInfo, Role } from '@/types';
import PlayStyleStats from './playstyle-stats';

type DetailsDescriptionProps = {
  roles: Role[];
  shortBio: string;
  playstyleInfo: PlaystyleInfo;
};

export default function DetailsDescription({
  playstyleInfo,
  roles,
  shortBio,
}: DetailsDescriptionProps) {
  return (
    <div className="mt-20 px-4 sm:px-8">
      <div className="mx-auto flex max-w-lg flex-col gap-4 border border-zinc-50 bg-white px-4 py-8 drop-shadow-large sm:px-8">
        <div>
          <div className="text-lg font-bold">Description</div>
          <p className="mt-2 font-medium">{shortBio}</p>
        </div>

        <div>
          <div className="text-lg font-bold">Roles</div>
          <ul className="mt-2 flex space-x-8">
            {roles.map((role) => (
              <li key={role} className="font-medium capitalize">
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="text-lg font-bold">Statistics</div>
          <PlayStyleStats playstyleInfo={playstyleInfo} />
        </div>
      </div>
    </div>
  );
}
