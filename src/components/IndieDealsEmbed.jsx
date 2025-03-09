const IndieDealsEmbed = () => {
  const htmlCode = `
    <a href="https://indie.deals?ref=https%3A%2F%2Freboost.fyi%2F" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
      <span style="font-size: 14px; font-weight: 500; color: #4b5563;">Find us on 
        <span style="font-weight: 700; color: #0070f3; position: relative; display: inline-block;">
          Indie.Deals
          <style>
            .indie-deals-text-badge:hover::after {
              width: 100%;
            }
          </style>
          <span class="indie-deals-text-badge" style="position: relative;">
            <span style="position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: #0070f3; transition: width 0.3s;"></span>
          </span>
        </span>
      </span>
    </a>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
};

export default IndieDealsEmbed;
