document.getElementById("countButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    
    // Send the input text to the backend for word count
    fetch('/count', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("wordCount").innerText = "Word Count: " + data.word_count;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

