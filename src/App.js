import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false }
];

const hideDonetask = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDonetask={hideDonetask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDonetask={hideDonetask} />}
      />

    </Container>
  );
}

export default App;