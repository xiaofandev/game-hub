import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryParamStore from "../store";
import { useNavigate } from "react-router";

const SearchInput = () => {
  const setSearchText = useQueryParamStore((state) => state.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(ref.current?.value || "");
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={18}
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
