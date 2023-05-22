// import React, { useEffect, useState } from 'react';
import './hp.css';
import React, { useState, useEffect } from 'react';

function AMS() {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState({ title: '' });
  const [editingAlbumId, setEditingAlbumId] = useState(null);
  const [updatedAlbumTitle, setUpdatedAlbumTitle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);

  const handleAddAlbum = () => {
    if (newAlbum.title.trim() === '') {
      alert('Album title cannot be empty or whitespace.');
      return;
    }
  
    const maxId = albums.reduce((max, album) => (album.id > max ? album.id : max), 0);
  
        // Generate a new unique ID for the new album
    const uniqueId = maxId + 1;
    // Make the POST request to create a new album
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        title: newAlbum.title,
        id: uniqueId,
        userId: 1, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create album.');
        }
        return response.json();
      })
      .then((json) => {
        // Find the maximum ID value among existing albums
  
        // Create the new album object with the unique ID and title from the response
        const albumWithId = { ...json, id: uniqueId };
  
        // Update the albums state by appending the new album
        const updatedAlbums = [...albums, albumWithId];
        setAlbums(updatedAlbums);
  
        // Clear the new album input field
        setNewAlbum({ title: ''});
  
        // Call handleUpdateAlbum with the newly created album object
  
        alert('Album added successfully!');
      })
      .catch((error) => {
        console.error('Error creating album:', error);
        alert('Failed to create album.');
      });
  };
   
  
  const handleUpdateAlbum = (albumId, newTitle) => {
    if (newTitle.trim() === '') {
      alert('Entered Album title cannot be empty or whitespace for update.');
      return;
    }
    const updatedAlbums = albums.map(album => {
      if (album.id === albumId) {
        return { ...album, title: newTitle};
      }
      return album;
    });
    setAlbums(updatedAlbums);
    
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
      method: 'PUT',
      body: JSON.stringify({ title: newTitle , id: albumId, userId: 1,}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(() => {
        // Update the state only if the request was successful
        setAlbums(updatedAlbums);
        console.log('Album updated successfully.');
        alert("Album updated successfully!");
      })
      // .catch(error => {
      //   // Handle error and revert the changes in the state
      //   console.log("Error in updating album",error);
      //   // alert("Error updating Album!");
      //   setAlbums(albums);
      // });
      
      setEditingAlbumId(null);
      setUpdatedAlbumTitle('');
  };

  
  
  
  
  const handleDeleteAlbum = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedAlbums = albums.filter((album) => album.id !== albumId);
      setAlbums(updatedAlbums);
      alert('Album deleted successfully.');
    });
    // .catch(error => {
    //   console.log("Error in deleting Albums", error);
    //   alert("Unable to delete album!");
    // });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'right' }}>Add New Album</h2>
      <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'flex-end' }}>
        <input
          type="text"
          placeholder='Album Title'
          value={newAlbum.title}
          onChange={(e) => setNewAlbum({ title: e.target.value })}
        />
        <button style = {{padding: '7px', color: 'red', backgroundColor: 'yellow', fontWeight: 'bold', textAlign: 'center'}} onClick={handleAddAlbum}>+ Add Album</button>
      </div>
      <h2 style = {{textAlign: 'center'}}><u>List of Albums</u></h2>
      <strong><hr /><hr /></strong>
      <div className="grid-container">
        {albums.map((album) => (
          <div className="album-block" key={album.id}>
            ID: {album.id}
            <hr />
            <hr />
            {editingAlbumId === album.id ? (
              <div>
                <input
                  type="text"
                  placeholder="Enter a new title"
                  value={updatedAlbumTitle}
                  onChange={(e) => setUpdatedAlbumTitle(e.target.value)}
                />
                <hr style = {{color: 'green'}}/>
                <br />
                <button
                  onClick={() => handleUpdateAlbum(album.id, updatedAlbumTitle)}
                  style={{ backgroundColor: 'lightgreen', margin: '3px' }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditingAlbumId(null);
                    setUpdatedAlbumTitle('');
                  }}
                  style={{ backgroundColor: 'red', margin: '3px' }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h3>Album Name:</h3>
                {album.title}
                <hr />
                <button
                  onClick={() => handleDeleteAlbum(album.id)}
                  style={{ backgroundColor: 'greenyellow', margin: '3px' }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditingAlbumId(album.id);
                    setUpdatedAlbumTitle(album.title);
                  }}
                  style={{ backgroundColor: 'lightgreen', margin: '3px' }}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <h2 style={{ textAlign: 'center' }}>
        ----------x---------- END OF MANAGE ALBUMS LIST PAGE ----------x----------
      </h2>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default AMS;
