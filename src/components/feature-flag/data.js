const dummyApiResponse = {
  showAccordian: true,
  showRandomColor: true,
  showQrGenerator: true,
  shoeLightdark: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error Occured!!");
  });
}

export default featureFlagDataServiceCall;