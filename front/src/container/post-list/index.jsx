import Title from "../../component/title/index";
import Box from "../../component/box/index";
import Grid from "../../component/gird/index";

import PostCreate from "../post-create/index";

const getData = () => {};
export default function Container() {
  return (
    <Grid>
      <Box>
        <Grid>
          <Title>Home</Title>
          <PostCreate
            onCreate={getData}
            placeholder="what is happening"
            button="Post"
          />
        </Grid>
      </Box>
    </Grid>
  );
}
