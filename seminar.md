---
title: Combinatorics Seminar
permalink: /seminar.html
---

Seminars, lectures, and colloquia at Hanyang University.

<div class="seminar-transfer-tools">
  <p>Copy a talk below and paste it into Google Sites. The title, date, location, and full abstract are included.</p>
  <button type="button" class="btn btn--primary" data-copy-seminars="all">Copy all talks</button>
  <a class="btn" href="{{ '/assets/exports/seminars-google-sites.txt' | relative_url }}" download>Download text</a>
  <span class="seminar-copy-status" role="status"></span>
</div>

{% assign events = site.seminars | sort: "date" | reverse %}
<div id="seminar-archive">
{% for event in events %}
<section class="seminar-event" id="{{ event.event_id }}">
  <div class="seminar-paste-content">
    <h2>{% if event.speaker_url %}<a href="{{ event.speaker_url }}">{{ event.title | escape }}</a>{% else %}{{ event.title | escape }}{% endif %}</h2>
    {% include seminar-facts.html event=event %}
    {{ event.content }}
  </div>
  <button type="button" class="btn" data-copy-seminars="{{ event.event_id }}">Copy this talk</button>
  <span class="seminar-copy-status" role="status"></span>
</section>
{% endfor %}
</div>

<script src="{{ '/assets/js/seminar-copy.js' | relative_url }}" defer></script>
