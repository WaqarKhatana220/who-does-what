const professions = [
    
    {   
        title: 'Scribe',
        description: 'A professional writer or copyist, especially in ancient civilizations, who was responsible for documenting and preserving important texts and records. Scribes were vital in the administration and culture of societies.',
        date: 'c. 3000 BC',
        image: '/manuscript.jpeg',
        fun_fact: 'Ancient Mesopotamian scribes often wrote letters for their employers, and one of the earliest documented complaints is from a scribe! A 3,800-year-old clay tablet contains a customer complaint about the quality of copper ingots delivered. The customer was upset and demanded a refund, showing that complaints about service have existed for millennia.'
    },
    {   
        title: 'Town Crier',
        description: 'An individual employed to make public announcements in the streets, often ringing a bell to attract attention. Town criers were important for communication before modern media.',
        date: 'Middle Ages',
        image: '/bell.jpeg',
        fun_fact: 'One of the most well-known modern-day town criers is Tony Appleton from the UK. He gained international fame when he announced the births of Prince George and Princess Charlotte outside of St. Mary’s Hospital in London. Although not officially associated with the royal family, his announcements were widely covered by the media, and he became a beloved figure worldwide.'
    },
    {   
        title: 'Farrier',
        description: 'A blacksmith who specializes in the care of horses’ hooves, including the application of horseshoes. This profession has been around for centuries and was essential for horse care and transportation.',
        date: 'Ancient Times',
        image: 'farrier.jpeg',
        fun_fact: 'Farriery is still a highly respected craft today, and there are farrier competitions around the world. These contests test the speed, skill, and craftsmanship of farriers, who must create and fit horseshoes under timed conditions. One such event is the World Championship Blacksmiths’ Competition, held annually in Calgary, Canada, as part of the Calgary Stampede. It draws farriers from around the world to showcase their talents.'
    },
    {   
        title: 'Wainwright',
        description: 'A craftsman who built and repaired wagons and carts. Wainwrights were crucial for transportation before the advent of motor vehicles.',
        date: '16th Century',
        image: '/wainwright.jpeg',
        fun_fact: 'The term “wainwright” comes from the Old English word “wægn,” meaning wagon, and “wyrhta,” meaning worker. Wainwrights were skilled artisans who crafted wagons and carts by hand, using wood and metal to create durable and functional vehicles. Their work was essential for the transportation of goods and people in pre-industrial societies. Wainwrights were not just craftsmen; they were early engineers. Building a functional wagon required extensive knowledge of mechanics and physics. They had to ensure the balance of the vehicle, the strength of the wheels and axles, and the durability of materials, all while considering the terrain the wagon would traverse. Their work was a blend of artistry and practical problem-solving.'
    },
    {   
        title: 'Chamberlain',
        description: 'An officer of a royal or noble household responsible for managing the household staff and finances. The role was significant in medieval and Renaissance courts.',
        date: 'Medieval Period',
        image: '/chamberlain.jpeg',
        fun_fact: 'The title of “chamberlain” has been used in various contexts throughout history. In medieval Europe, a chamberlain was a high-ranking official in the household of a noble or royal family. The chamberlain was responsible for managing the household staff, overseeing the finances, and ensuring the smooth operation of the household. The position was one of great trust and influence, as the chamberlain had access to the inner workings of the court and the personal affairs of the ruler. The chamberlain often acted as a confidant and advisor to the monarch, providing valuable insights into court politics and affairs of state.'
    },
    {   
        title: 'Flavorist',
        description: 'These specialists create flavors for food and beverages, using a mix of natural and synthetic ingredients.',
        date: '20th century',
        image: '/flavorist.jpeg',
        fun_fact: 'Flavor is a complex sensory experience that arises from the interplay between taste and smell. While we often think of flavor in terms of the five basic tastes—sweet, sour, salty, bitter, and umami—our perception of flavor is heavily influenced by our sense of smell. When we eat, volatile compounds from the food release into the air and travel to our olfactory receptors, allowing us to experience a broader spectrum of flavors. This connection is so strong that many flavorists, who specialize in creating flavors for food and beverages, emphasize the importance of scent in their work. They often create both scents and flavors simultaneously, as the aromatic profile can enhance or alter the overall taste experience. Understanding this relationship is crucial for flavorists to develop products that provide a harmonious and appealing sensory experience.'
    },
    {   
        title: 'Urban Forager',
        description: 'Urban foragers search for edible plants and food sources in urban environments, often focusing on sustainability.',
        date: '21st century',
        image: '/forager.jpeg',
        fun_fact: 'There are several instances in history where people have accidentally foraged or discovered edible plants that turned out to be delicious or beneficial. The cacao (chocolcate) tree was discovered by ancient Mesoamerican cultures, possibly as far back as 1,500 BCE. According to legend, the Olmecs first encountered cacao pods while foraging, finding the bitter seeds inside. They eventually learned to ferment the seeds to create a frothy drink, paving the way for the chocolate we know today'
    },
    {   
        title: 'Digital Nomad',
        description: 'These professionals work remotely while traveling the world, often using technology to maintain their work-life balance.',
        date: '21st century',
        image: '/nomad5.jpeg',
        fun_fact: 'The concept of the "digital nomad" became popular with the rise of the internet, but one of the earliest pioneers of this lifestyle is Steve Roberts, an American technologist and writer. In the 1980s, Roberts traveled around the U.S. on a recumbent bicycle he named Behemoth, which was equipped with a custom-built computer, solar panels, and satellite communication tools, allowing him to work remotely while on the move. He wrote and published articles about his journey, effectively embodying the digital nomad ethos long before the term existed.'

    },
    {   
        title: 'Cartographer',
        description: 'Cartographers create maps, incorporating data analysis, geographic information systems (GIS), and artistic skills.',
        date: 'Ancient times',
        image: '/cartographer.png',
        fun_fact: 'One of the most famous cartographers in history is Gerardus Mercator, a Flemish geographer and cartographer known for creating the Mercator projection, a cylindrical map projection that preserves angles and shapes for navigation. Mercator’s projection was revolutionary for its time, as it allowed sailors to navigate the seas with greater accuracy. The Mercator projection became the standard map projection for nautical charts and world maps, shaping our understanding of geography and navigation for centuries.'
    },
    {   
        title: 'Art Restorer',
        description: 'Art restorers repair and preserve artworks, ensuring their longevity and authenticity.',
        date: 'Renaissance',
        image: '/art_restorer.png',
        fun_fact: 'Often, art restorers work in anonymity. Their goal is to preserve the artwork and make it as close to its original state as possible, so their work is meant to be invisible to the general public. When restoration is successful, people may not even realize it was done!'
    },
    {   
        title: 'Space Lawyer',
        description: 'These lawyers specialize in laws related to outer space, including treaties, regulations, and private sector activities.',
        date: '21st century',
        image: '/lawyer.png',
        fun_fact: 'One of the major legal challenges in space law today is the growing number of satellites being launched into orbit, particularly with projects like Starlink. SpaceX plans to launch tens of thousands of satellites to provide global broadband internet, which raises issues of orbital congestion, space debris, and the regulation of private ventures. Space lawyers are heavily involved in ensuring that the company complies with both international treaties and national regulations, while also negotiating agreements with international bodies like the International Telecommunication Union (ITU).'
    },
    {   
        title: 'Aquaculture Farmer',
        description: 'They raise fish, shellfish, and other aquatic organisms for food, restoring natural ecosystems while meeting demand.',
        date: '20th century',
        image: '/aquatic_farmer3.png',
        fun_fact: 'Aquaculture has a long history, with evidence of fish farming dating back to ancient civilizations like the Egyptians, Romans, and Chinese. The Romans, in particular, were known for their aquaculture practices, raising fish in ponds and reservoirs for consumption. They even developed sophisticated systems for transporting live fish to markets in distant cities, demonstrating the importance of aquaculture in ancient economies. Today, aquaculture is a vital industry that provides a significant portion of the world’s seafood supply, helping to meet the growing demand for fish protein while reducing pressure on wild fish populations.'
    },
    {   
        title: 'Urban Planner',
        description: 'Urban planners develop land use plans and programs that help create communities, accommodate growth, and revitalize physical facilities.',
        date: '20th century',
        image: '/u_planner.png',
        fun_fact: 'One of the most famous urban planners in history is Daniel Burnham, an American architect and city planner known for his work on the 1893 World’s Columbian Exposition in Chicago. Burnham’s vision for the fairgrounds, known as the “White City,” showcased neoclassical architecture and urban design principles that influenced city planning for decades. Burnham’s Plan of Chicago, published in 1909, proposed a comprehensive urban plan for the city that included parks, boulevards, and a lakefront promenade. His work laid the foundation for modern urban planning and inspired generations of city designers.'
    },
    {   
        title: 'Water Resource Specialist',
        description: 'They manage and analyze water resources, focusing on sustainability and conservation.',
        date: '20th century',
        image: '/water_resource.png',
        fun_fact: 'Water resource specialists play a crucial role in managing one of the Earth’s most vital resources. Water is essential for life, agriculture, industry, and energy production, making its sustainable management a top priority for governments, organizations, and communities worldwide. Water resource specialists use a combination of scientific knowledge, engineering expertise, and policy analysis to develop strategies for water conservation, pollution control, and equitable distribution. Their work is essential for ensuring a safe and reliable water supply for current and future generations.'
    },
    {   
        title: 'Data Wrangler',
        description: 'Data wranglers clean, organize, and prepare data for analysis, ensuring data quality and accessibility.',
        date: '21st century',
        image: '/data_wrangler.png',
        fun_fact: "Data wrangling takes up about 60-80% of a data scientist's time. The process of collecting, cleaning, and transforming data is often more time-consuming than building and training models. Even the most advanced machine learning algorithms are useless if the data they’re based on isn’t clean, consistent, and structured properly."
    },
    {   
        title: 'Climate Change Analyst',
        description: 'They analyze data related to climate change and its impact, helping organizations develop strategies for mitigation and adaptation.',
        date: '21st century',
        image: '/weather_analyst.png',
        fun_fact: 'Climate change analysts play a crucial role in understanding and addressing one of the most pressing challenges of our time. By analyzing data on temperature trends, extreme weather events, sea-level rise, and other indicators of climate change, these professionals provide valuable insights to policymakers, businesses, and communities. Their work helps inform decisions on reducing greenhouse gas emissions, adapting to changing conditions, and building resilience to climate-related risks.'
    },
    {   
        title: 'Technical Writer',
        description: 'Technical writers create manuals, guides, and documentation for complex information and technologies.',
        date: '20th century',
        image: 'writer.jpeg',
        fun_fact: 'Vannevar Bush’s article "As We May Think" is often credited with influencing the development of personal computing and hypertext systems. This work, published in The Atlantic Monthly in 1945, envisioned a system of storing and retrieving information (similar to today’s internet) and laid the groundwork for future technical writing in the field of information systems and data management.'
    },
];

export default professions;
