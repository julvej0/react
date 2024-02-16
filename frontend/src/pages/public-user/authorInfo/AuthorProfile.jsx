import React from 'react'

const AuthorProfile = () => {
  return (
    <div id="author-page">
  <div className="page-title">
    <h3 className="animate__animated animate__zoomIn">AUTHOR DETAILS</h3>
  </div>
  <div className="profile-container">
    <div className="profile-details">
      <label className="author-header">AUTHOR INFORMATION</label>
      <div className="profile-row">
        <label htmlFor="affiliation">Author Identification Code:</label>
        <p>
          {/*?php echo $author_user['author_id'] ? $author_user['author_id'] : 'Not Yet Set';?*/}
        </p>
      </div>
      <div className="profile-row">
        <label htmlFor="affiliation">Type:</label>
        <p>
          {/*?php echo $author_user['type_of_author'] ? $author_user['type_of_author'] : 'Not Yet Set';?*/}
        </p>
      </div>
      <div className="profile-row">
        <label htmlFor="affiliation">Name:</label>
        <p>
          {/*?php echo $author_user['author_name'] ? $author_user['author_name'] : 'Not Yet Set';?*/}
        </p>
      </div>
      <div className="profile-row">
        <label htmlFor="affiliation">Affiliation:</label>
        <p>
          {/*?php
                  //check if affiliation is null
                  if (is_null($author_user['affiliation'])){
                      echo "N/A";
                  }
                  else{
                      //display affiliation 
                      $affiliation = explode(' || ', $author_user['affiliation']); //separate internal and external affiliation

                      // initializations
                      $internal_affiliation = "";  //container for internal
                      $external_affiliation = "";  //container for external

                      //extract internal
                      if (count($affiliation)*/}
          0){"{"}
          foreach (explode('_', $affiliation[0]) as $in_aff){"{"}
          if ($in_aff != ""){"{"}
          $internal_affiliation .= $in_aff . ", BatStateU <br />
          ";
          {"}"}
          else{"{"}
          $internal_affiliation = "";
          {"}"}
          {"}"}
          {"}"}
          //extract external if (count($affiliation)&gt;1){"{"}
          foreach (explode('_', $affiliation[1]) as $ex_aff){"{"}
          $external_affiliation = $ex_aff . "<br />
          ";
          {"}"}
          {"}"}
          //if both empty if ($internal_affiliation == "" &amp;&amp;
          $external_affiliation == "" ){"{"}
          echo "N/A";
          {"}"}
          //if existing else{"{"}
          $all_affiliation =array($internal_affiliation, $external_affiliation);
          echo implode('', $all_affiliation);
          {"}"}
          {"}"}
          ?&gt;
        </p>
      </div>
    </div>
  </div>
  <label id="author-pubs">AUTHOR'S WORKS</label>
  <div id="author-info" style={{ display: "flex", justifyContent: "center" }}>
    {/*?php
                  include_once "functionalities/author-data.php";
                  display_publications($conn, $author_user['author_id']);
                  display_ipassets($conn, $author_user['author_id']);
              ?*/}
  </div>
</div>

  )
}

export default AuthorProfile