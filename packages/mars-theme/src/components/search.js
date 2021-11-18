import { connect, styled } from "frontity";
import Colors from "../colors";
import { useCallback, useState } from "react";

const MarsSearch = ({ state, actions, initialValue = "" }) => {
  const [search, setSearch] = useState(initialValue);

  const onChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      actions.router.set(`/?s=${search}`);
    },
    [state, search]
  );

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <SearchInput type="search" value={search} onChange={onChange} />
      </Container>
    </form>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 24px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid ${Colors.primary};
  padding: 4px 8px;
  font-size: 20px;
`;

export default connect(MarsSearch);
