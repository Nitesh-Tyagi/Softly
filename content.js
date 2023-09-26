const replacements = {
  'Iron': 'Approach',
  'attack': 'approach',
  'Confront': 'Discuss',
  'confront': 'discuss',
  'Destroy': 'Remove',
  'destroy': 'remove',
  'Insult': 'Critique',
  'insult': 'critique',
  'Kill': 'End',
  'kill': 'end',
  'Threaten': 'Warn',
  'threaten': 'warn',
  'Harm': 'Protect',
  'harm': 'protect',
  'Hurt': 'Affect',
  'hurt': 'affect',
  'Abuse': 'Affect',
  'abuse': 'affect',
  'Curse': 'Express',
  'curse': 'express',
  'Furious': 'Upset',
  'furious': 'upset',
  'Violate': 'Bother',
  'violate': 'bother',
  'Reject': 'Decline',
  'reject': 'decline',
  'Betray': 'Disappoint',
  'betray': 'disappoint',
  'Blame': 'Consider',
  'blame': 'consider',
  'Cry': 'Express',
  'cry': 'express',
  'Steal': 'Borrow',
  'steal': 'borrow',
  'Punish': 'Correct',
  'punish': 'correct'
};


const tags = [
  'p',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'a',
  'ul', 'li',
  'span', 'label',
  'caption',
  'summary'
];

function setActive() {
  try {
    for (const tag of tags) {
      const elements = document.getElementsByTagName(tag);

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.innerText) {
          let innerText = element.innerText;
          for (const key in replacements) {
            const regex = new RegExp(key, 'g');
            innerText = innerText.replace(regex, replacements[key]);
          }
          element.innerText = innerText;
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function gotMessage(req, sender, sendResponse) {
  if (req.active) {
    setActive();
  }
}

chrome.runtime.onMessage.addListener(gotMessage);