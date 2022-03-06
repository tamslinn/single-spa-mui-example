import { ThemeProvider, theme, Typography } from "@example/mui";

export default function Root(props) {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Typography>{props.name} is mounted!</Typography>
      </section>
    </ThemeProvider>
  );
}
