badge-card
=================

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

Place [badges](https://www.home-assistant.io/lovelace/dashboards-and-views/#state-label-badge) anywhere you'd like - not just at the top of the view, and even in panel-mode views.
<DESCRIPTION>.

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

## Usage

Add `badge-card` as a card in lovelace, and specify the badges just as you would in the [veiw configuration](https://www.home-assistant.io/lovelace/dashboards-and-views/#state-label-badge):

```yaml
views:
  - title: Test view

    # View badges
    badges:
      - entity: binary_sensor.updater
      - entity: binary_sensor.basement_floor_wet
      - entity: binary_sensor.movement_backyard
      - entity: mailbox.demomailbox
      - entity: sensor.outside_temperature
      - entity: sensor.outside_humidity
      - entity: sun.sun

    cards:
      - type: entities
        entities:
          - light.bed_light
          - light.ceiling_lights
          - light.kitchen_lights

      # Badge-card
      - type: custom:badge-card
        badges:
          - entity: binary_sensor.updater
          - entity: binary_sensor.basement_floor_wet
          - entity: binary_sensor.movement_backyard
          - entity: mailbox.demomailbox
          - entity: sensor.outside_temperature
          - entity: sensor.outside_humidity
          - entity: sun.sun
```

![demo screenshot](https://user-images.githubusercontent.com/1299821/88083113-f122d400-cb82-11ea-8239-b5e38674ab14.png)


### Bonus feature

`badge-card` works with entity-filter (or [auto-entities](https://github.com/thomasloven/lovelace-auto-entities)); the following example shows a badge for each light that is turned on:

```yaml
type: entity-filter
entities:
  - light.bed_light
  - light.ceiling_lights
  - light.kitchen_lights
state_filter:
  - "on"
card:
  type: badge-card
```

### Design process

On a whim, I decided to livestream how I made this card.
If you want to see me stuttering through it in a blurred video, it's here:


[![Development video](https://img.youtube.com/vi/SwI8zHLP-EU/0.jpg)](https://www.youtube.com/watch?v=SwI8zHLP-EU)


---
<a href="https://www.buymeacoffee.com/uqD6KHCdJ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
