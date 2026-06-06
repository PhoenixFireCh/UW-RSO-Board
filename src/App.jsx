import './App.css';
import Card from './Components/Card'

const App = () => {
  return (
    <div className="App">
      <div className="titleElements">
        <h1 className="head">University of Washington RSOs</h1>
        <h2>For Seattle Campus</h2>
      </div>
      <div className="gridArea">
        <Card image = "/aha.jpg" 
              title= "Advancing Husky Artistry" 
              description="Advancing Husky Artistry is a safe place for artists and appreciators of the arts to connect! Here, artists of all different skill levels and mediums can gain new skills and build each other up as a community."
              link = "https://huskylink.washington.edu/organization/huskyartistry"/>
        <Card image = "/brc.jpg" 
              title= "Bird Club at UW" 
              description="Bird Club at UW is a fun and informative space for exploring the native birds of our local area, from the University of Washington campus itself, to the whole Puget Sound and beyond. "
              link = "https://huskylink.washington.edu/organization/birduw"/>
        <Card image = "/hcc.jpg" 
              title= "Husky Culinary Club" 
              description="In the Husky Culinary Club, we learn ways to further our interests in the culinary world! We seek to learn new cooking techniques and cultural significance about our food."
              link = "https://huskylink.washington.edu/organization/huskyculinaryclub"/>
        <Card image = "/ctc.jpg" 
              title= "Quiet Time Club" 
              description="Quiet Time Club is a safe space for shy, introverted, or reserved students. Such students are able to understand and support one another in ways that are difficult to find. We welcome anyone that is struggling to find community on campus!"
              link = "https://huskylink.washington.edu/organization/qtc"/>
        <Card image = "/loa.jpeg" 
              title= "League of Astronomers" 
              description="The League of Astronomers (LoA) is an undergraduate-run organization at the University of Washington. Open to majors and non-majors alike, we strive to provide an educational and fun environment for astronomy enthusiasts. For those interested in earning a degree in astronomy, we offer spaces for collaboration on coursework, connections to research opportunities, advice for navigating the major, and workshops/panels about future steps for building a career in astronomy."
              link = "https://huskylink.washington.edu/organization/loa"/>
        <Card image = "/swc.jpg" 
              title= "Star Wars Club at UW" 
              description="This club is geared to Star Wars fans with activities such watching the movies, playing games, lightsaber battles, and many more. It is a fun space where fans can meet other fans and those wishing to get into Star Wars have that opportunity. "
              link = "https://huskylink.washington.edu/organization/starwars"/>
        <Card image = "/hfc.jpg" 
              title= "Husky Furry Club" 
              description="A safe space where both furries and non-furries from all three UW campuses can interact with one another."
              link = "https://huskylink.washington.edu/organization/huskyfurryclub"/>
        <Card image = "/com.jpg" 
              title= "Computing Community @ the University of Washington" 
              description="The purpose of COM² is to connect CSE students with peers, faculty, staff, and industry, and provide students with the resources and skills they need to succeed through career and academic support, mentorship, and community-building initiatives. COM² acts as a gateway for students to make a difference in the department."
              link = "https://huskylink.washington.edu/organization/com-2"/>
        <Card image = "/lec.jpg" 
              title= "The Lettuce Eating Club at the University of Washington" 
              description="This is a group of fun-loving lettuce eaters who care about the environment. We meet once a quarter and have a fun lettuce eating event in which everyone competes to see who can eat their head of iceberg lettuce the fastest. "
              link = "https://huskylink.washington.edu/organization/lettuceeatingclub"/>
        <Card image = "/hvz.jpg" 
              title= "Humans vs. Zombies Tag" 
              description="Humans vs. Zombies Tag is a campus-wide alternate reality game, hosted quarterly, in which members of the Human Resistance attempt to outlast the Zombie Horde for a week as they attempt to get around to classes. HvZT is played at hundreds of US colleges and universities and across 5 continents."
              link = "https://huskylink.washington.edu/organization/uwhvzt"/>
      </div>
    </div>
  )
}

export default App