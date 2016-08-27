const coroutine = window.co || (() => { throw new Error('co not imported globally'); });
coroutine(function* lab1() {
  try {
    // Fetch Users AJAX
    const users = yield fetch('users.json').then(res => res.json());
    const usersWithCreditCards = users.filter(user => user.creditcard);
    // console.table(usersWithCreditCards, ['name', 'creditcard']);

    // log users to console
    const csv = usersWithCreditCards.reduce((acculator, user) => (
      `${acculator}\n${user.name}, ${user.creditcard}`
    ), '');
    console.log(csv);

    // Map Users to DOM
    const html = usersWithCreditCards.reduce((acculator, user) => (
      `${acculator}<br />${user.name}, ${user.creditcard}`
    ), '');
    document.body.innerHTML = html;
  } catch (e) {
    console.groupCollapsed('Could not retrieve users. Did you forget to run npm serve?')
    console.error(e)
    console.groupEnd();
  }
});
