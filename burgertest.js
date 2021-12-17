<script language="javascript">
    
var Quest = new Array(10);

function populate() {
  for(var i=0; i<10; i++) { Quest[i]=0; }
}

function total() {
  myScore=0;
  for (var i=0; i<10; i++) { myScore=myScore+Quest[i]; }
  analyzer(myScore);
}
myContents = new Array();
myContents[0] = " Anderen zien jou als een voorbeeldfiguur, en willen graag op jou lijken maar zijn toch echt niet zo goed als dat jij bent,"
 + " je bent een voorbeeldfiguur voor vele mensen en je bent niet te imiteren,"
 + " Jij bent dus een echte big mac, onoverwinnelijk en niet te kopieren."; 
myContents[1] = " Jij bent iemand die van nieuwe avonturen houdt en graag eens iets out of the box probeert,"
 + " Je bent goed in wat je doet en je doet alles op je eigen manier,"
 + " Je bent een homestyle crispy chicken honey mustard, anders dan de rest maar o zo goed op je eigen manier.";
myContents[2] = " Jij bent dat ene vriendelijke persoon die met iedereen vrienden is. Veel mensen vinden jou een van de aardigste personen die ze kennen; "
 + " ook ben je heel eerlijk en oprecht over je gevoelens. Mensen vinden het heel fijn dat je altijd voor ze klaarstaat,"
 + " Je bent een kipnugget. Je past precies tussen alle andere nuggets en bent simpel en eerlijk over de samenstelling van je inhoud.";
myContents[3] = " Jij bent erg voorzichtig, slim en terughoudend. Anderen zien jou als simpel maar kunnen jou niet missen;"
 + " in stressvolle situaties bewaar jij altijd de rust en vind je je weg er weer uit,"
 + " Je bent een hamburger. Simpel, maar toch orgineel en een echte klassieker.";
myContents[4] = "Je bent erg kieskeurig, maar toch voorzichtig in de keuzes die je maakt; "
 + " Je bent een cheeseburger, voorzichtig maar toch kieskeurig. ";
myContents[5] = " Jij bent een besluiteloos persoon en hebt vaak moeite met het maken van keuzes, "
 + " je laat beslissingen liever over aan een ander om niet in conflict met jezelf te komen,"
 + " Je bent een McFish, je zwemt overal tussenduur en bent niet te ingewikkeld."

    
function analyzer (myScore) {
  if (myScore>60) { myContentsPtr = 0; }
  else { if (myScore > 50) { myContentsPtr = 1; }
    else { if(myScore>40)  { myContentsPtr = 2; } 
      else { if(myScore>30) { myContentsPtr = 3; }
        else { if(myScore>20) { myContentsPtr = 4; }
          else { myContentsPtr = 5; }
        }
      }
    }
  }
  myDisplay(myContents[myContentsPtr])
}

function myDisplay(myContents) {
  alert(myContents);
}
    

function saver(q, points) {
  q=q-1;
  Quest[q]=points
}

</script>
