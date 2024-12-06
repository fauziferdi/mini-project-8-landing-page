import React from "react";
import ItemMemberComponent from "./ItemMemberComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../redux/slices/TeamSlice";
import { useEffect } from "react";

const ListMemberComponent = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);
  return (
    <>
      <div className="max-w-screen-xl px-5 py-10 mx-auto sm:px-10 sm:py-20">
        <h2 className="pb-10 font-sans text-4xl font-extrabold text-center">
          Meet the heroes behind the magic
        </h2>
        <div class="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8 ">
          {teams.map((team, index) => (
            <div key={index + 1} class=" rounded-lg bg-gray-200">
              <ItemMemberComponent team={team} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListMemberComponent;
