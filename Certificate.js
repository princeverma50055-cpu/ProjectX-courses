// A simple logic for certificate overlay
export const generateCertificate = (userName, courseName) => {
  return `
    <div style="border: 10px solid #0066ff; padding: 50px; text-align: center; font-family: serif;">
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h2>${userName}</h2>
      <p>has successfully completed the premium course</p>
      <h3>${courseName}</h3>
      <div style="margin-top: 50px;">
        <p>__________________________</p>
        <p style="font-style: italic; font-size: 20px;">Prince Verma</p>
        <p>Founder, ProjectX Hub</p>
      </div>
    </div>
  `;
};

