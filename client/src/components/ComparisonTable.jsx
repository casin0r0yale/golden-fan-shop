import React, {useState, useEffect} from 'react';

const ComparisonTable = (props) => {

  const [primaryName, setPrimaryName] = useState('');
  const [fullListFeatures, setFullListFeatures] = useState([]);
  // const [parsePrimaryInfo, setParsePrimaryInfo] = useState({});
  // const [parseRelatedInfo, setParseRelatedInfo] = useState({});

  useEffect(() => {

    var compareMaster = [];
    var compareMasterFiltered =[];

    (async (p1, r2) => {
      const myAsyncParseInfo = async (str) => {
        return JSON.parse(str)
        };

      try {
        var parsePrimaryInfo = await myAsyncParseInfo(p1);
        var parseRelatedInfo = await myAsyncParseInfo(r2);
        setPrimaryName(parsePrimaryInfo[0].namePrimary);

        (async (cb) => {
          try {
            for (var i = 0; i < parsePrimaryInfo.length; i++ ) {

              var objP = parsePrimaryInfo[i];
              for (var j = 0; j < parseRelatedInfo.length; j++ ) {
                var objR = parseRelatedInfo[j];

                if(objP.featurePrimary === objR.feature && objP.valuePrimary === objR.value && objP.valuePrimary !== null) {
                  var bothRow = [1, objP.featurePrimary, objP.valuePrimary, 1];
                  compareMaster.push(bothRow);
                }
                if(objP.featurePrimary === objR.feature && objP.valuePrimary === objR.value && objP.valuePrimary === null) {
                  var bothRow = [1, objP.featurePrimary, '', 1];
                  compareMaster.push(bothRow);
                }
              }
            }


            for (var i = 0; i < parsePrimaryInfo.length; i++ ) {
              var objP = parsePrimaryInfo[i];
              if(objP.valuePrimary !== null) {
                var pRow = [1, objP.featurePrimary, objP.valuePrimary, 0];
                compareMaster.push(pRow);
              } else {
                var pRow = [1, objP.featurePrimary, '', 0];
                compareMaster.push(pRow);
              }
            }

            for (var j = 0; j < parseRelatedInfo.length; j++ ) {
              var objR = parseRelatedInfo[j];
              if(objR.value !== null) {
                var rRow = [0, objR.feature, objR.value, 1];
                compareMaster.push(rRow);
              } else {
                var rRow = [0, objR.feature,'', 1];
                compareMaster.push(rRow);
              }
            }
          } catch (err) {
              console.error(err)
            } finally {
              cb(null)
            }
          })((err) => {
            if (err) {
              throw err;
            } else {

            for (var i = 0; i < compareMaster.length; i++ ) {
              var currentCompareMaster = compareMaster[i];

              if (compareMasterFiltered.length === 0) {

                compareMasterFiltered.push(currentCompareMaster);
              } else {
                for (var j = 0; j < compareMasterFiltered.length; j++ ) {
                  var currentCompareMasterFiltered = compareMasterFiltered[j];
                  if (currentCompareMasterFiltered[1] === currentCompareMaster[1] && currentCompareMasterFiltered[2] === currentCompareMaster[2]){
                    break;
                  }
                  if (compareMasterFiltered.length - 1 === j) {
                    compareMasterFiltered.push(currentCompareMaster);
                  }
                }
              }
            }
          }
        })
        } catch (err) {
          console.error(err)
        } finally {
          setFullListFeatures(compareMasterFiltered);
        }
      })(props.featuresPrimaryProductString, props.featuresRelatedProductString)

  }, [])

  return (
  <div class="row">
    <div class="compareLeft">COMPARING</div><br/><br/>

    <div class="compareLeftName">{primaryName}</div>
    <div class="compareRightName">{props.related_name}</div><br/><br/><br/>

    {fullListFeatures.map((item, index) => { return (
      <div key={index}>
        <div class="compareLeft" style={{opacity: item[0]}}>#x2713&;</div>
        <div class="compareMiddleColumn"> <a class="boldFont">{item[1]}</a> <a>{ ' ' + item[2]}</a> </div>
        <div class="compareRight" style={{opacity: item[3]}}>&#x2713;</div>
      </div>
    )})}


  </div>
  )
}

export default ComparisonTable;
