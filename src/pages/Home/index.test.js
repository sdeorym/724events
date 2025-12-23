import { fireEvent, render, screen, className } from "@testing-library/react";
// import "testing-library/jest-dom"
import Home from "./index";
import EventList from "../../containers/Events";
import PeopleCard from "../../components/PeopleCard";
import EventCard from "../../components/EventCard";
import { getLast } from "./index";

test("returns the most recent date", () => {
  const a = {
            "title": "World economic forum",
            "description": "Oeuvre à la coopération entre le secteur public et le privé.",
            "date": "2022-01-29T20:28:45.744Z",
            "cover": "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png"
        };
  const b = {
            "title": "Nordic design week",
            "description": "Conférences sur le design de demain dans le digital",
            "date": "2022-03-29T20:28:45.744Z",
            "cover": "/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.png"
        };
  const datum = {"events" : [a, b]};
  let lastDate = getLast(datum);
  expect(lastDate.date).toBe("2022-03-29T20:28:45.744Z");
});

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    let x = await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});


describe("When a page is created",  () => {
  it("a list of events is displayed", () => {
    const testedElement = render(<EventList />);
    const lengthArray = 5;
    let eventCategory =  screen.findAllByText("conférence").then(() =>
      {expect(eventCategory.length).toBe(lengthArray);});
  })
  it("a list a people is displayed", () => {
    const testedStaff = render(<PeopleCard
      imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
      alt="Integration test"
      name="Samira"
      position="CEO"
      />);
    let peopleCardtest = testedStaff.getAllByTestId("card-image-testid");
    let source = peopleCardtest;
    expect(source[0].src).toBe("http://localhost/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png");
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    let lastEventTest = render(
      <EventCard
        imageSrc={"/images/product-school-nOvIa_x_tfo-unsplash.png"}
        title={"Conférence #productCON"}
        date={new Date("2022-11-29T20:28:45.744Z")}
      />)
      let tinyCardTest = lastEventTest.getByTestId("card-image-testid");
      expect (tinyCardTest.src).toBe("http://localhost/images/product-school-nOvIa_x_tfo-unsplash.png");
    // to implement
  })
});
