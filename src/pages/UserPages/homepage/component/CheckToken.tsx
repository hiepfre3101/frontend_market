import { Link } from "react-router-dom";
import { Popover } from "antd";
import { CiUser } from "react-icons/ci";
import { useGetTokenQuery } from "../../../../services/auth.service";

const CheckToken = () => {
  const { data } = useGetTokenQuery();

  return (
    <div>
      {data?.token === "" ? ( // Sử dụng data.token để kiểm tra token
        <Popover
          placement="bottom"
          content={
            <>
              <Link to={"/signup"}>SignUp</Link>
              <br />
              <Link to={"/login"}>Login</Link>
            </>
          }
          trigger="click"
        >
          <span>
            <CiUser className="w-7 h-7" />
          </span>
        </Popover>
      ) : (
        <>
          {/* <div className="w-[5%] h-full">
            <Dropdown placement="bottom" menu={{ items }}>
              <img
                src={user.avatar}
                className="w-[60%] aspect-square rounded-full cursor-pointer"
              />
            </Dropdown>
          </div>
          <Popover
            placement="bottom"
            content={
              <>
                <img
                  src={user.avatar}
                  className="w-[60%] aspect-square rounded-full cursor-pointer"
                />
              </>
            }
            trigger="click"
          >
            <span>
              <CiUser className="w-7 h-7" />
            </span>
          </Popover> */}
        </>
      )}
    </div>
  );
};

export default CheckToken;
