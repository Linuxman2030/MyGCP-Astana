//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Kairat S
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of Astana fo the Kairat!</font><br><b>App Version 3</b>";
  res.status(200).send(message);
};
