import { mount } from "@vue/test-utils";
import Home from "../../pages/Home.vue";

describe("Home methods", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Home);
  });

  afterEach(() => {});

  test("shuffles an array correctly without loose cards", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array]; // Copy to compare

    wrapper.vm.shuffle(array);

    // Test that the array is shuffled
    expect(array).not.toEqual(originalArray);

    // Test that the length remains the same
    expect(array.length).toEqual(originalArray.length);

    // Test that all elements are still present in the shuffled array
    originalArray.forEach((item) => {
      expect(array).toContain(item);
    });
  });

  test("creates cards without duplicates", () => {
    wrapper.vm.createCard();

    // Test that the number of cards created is 10
    expect(wrapper.vm.cards.length).toBe(10);

    // Test if there are duplicates
    const cardSet = new Set();
    wrapper.vm.cards.forEach((card) => {
      const cardKey = `${card[0]}_${card[1]}`;
      expect(cardSet.has(cardKey)).toBe(false);
      cardSet.add(cardKey);
    });
  });

  test("sorts cards by suit and value", () => {
    // Test that cards are already created
    wrapper.vm.createCard();

    // Shuffle colors and values
    wrapper.setData({
      shuffledColors: wrapper.vm.shuffle([...wrapper.vm.orderColors]),
    });
    wrapper.setData({
      shuffledValues: wrapper.vm.shuffle([...wrapper.vm.orderValues]),
    });

    // Sort the cards
    wrapper.vm.sortCards();
  });

  test("starts the game correctly", () => {
    const createCardSpy = jest.spyOn(wrapper.vm, "createCard");
    const shuffleSpy = jest.spyOn(wrapper.vm, "shuffle");
    const sortCardsSpy = jest.spyOn(wrapper.vm, "sortCards");

    wrapper.vm.start();

    // Test that start() calls createCard(), shuffle(), and sortCards()
    expect(createCardSpy).toHaveBeenCalled();
    expect(shuffleSpy).toHaveBeenCalledWith(wrapper.vm.orderColors);
    expect(shuffleSpy).toHaveBeenCalledWith(wrapper.vm.orderValues);
    expect(sortCardsSpy).toHaveBeenCalled();
  });
});
