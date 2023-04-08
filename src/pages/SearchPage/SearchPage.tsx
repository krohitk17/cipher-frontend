import Loading from "../../components/Loading";
import Overlay from "../../components/Overlay";

export default function SearchPage({
  isLoading,
  users,
  isOpen,
  onClose,
}: {
  isLoading: boolean;
  users: any[];
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <Loading isLoading={isLoading}>
        <div className="flex flex-col gap-5">
          {users.map((user) => (
            <div key={users.indexOf(user)} className="flex flex-col gap-2">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </Loading>
    </Overlay>
  );
}
