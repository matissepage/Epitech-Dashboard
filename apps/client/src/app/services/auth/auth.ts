/* eslint-disable @typescript-eslint/no-explicit-any */
export const redirectToSSo = async (
  history: any,
  url: string,
  name: string,
  path?: string,
  validate: (name: string) => boolean = () => true,
) => {
  const newWindow = window.open(url, '_blank', 'width=500,height=600');
  if (newWindow) {
    const timer = setInterval(function () {
      if (newWindow.closed) {
        clearInterval(timer);
        console.log('closed');
        if (path && validate(name)) history.push(path);
        window.location.reload();
      }
    }, 700);
  }
};
