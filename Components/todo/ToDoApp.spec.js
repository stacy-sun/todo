describe('ToDoApp', () => {
  beforeAll(() => {
    // browser.waitForAngularEnabled(false);
    // browser.get('http://localhost:9001/');
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:9001/?selectedKind=Components&selectedStory=TodoApp');
    browser.switchTo().frame('storybook-preview-iframe');
  });

  it('should load right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).toEqual('Storybook');
  });

  //   it('should list the todo items', () => {
  //     let items = $$('.items li');
  //     expect(list.count()).toBe(3);
  //   });

  // it('should add new item when click add button', () => {

  // });

  it('should mark them as complete when click the checkbox', () => {
    let checkbox = $$('.checkbox');

    expect(checkbox.isSelected()).toBe([true, true, false]);
    checkbox.click();
    expect(checkbox.isSelected()).toBe([false, false, true]);
  });

  //   it("should show them all when the filter is 'all'");
  //   it("should show complete items when the filter is 'complete'");
  //   it("should show incomplete items when the filter is 'incomplete'");
});
