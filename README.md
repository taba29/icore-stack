# icore-stack

## Quick start
```bash
docker compose up -d postgres
cd api && npm i && npm run dev
docker compose up -d prometheus grafana

```
- Prometheus: http://localhost:9090
- Grafana:   http://localhost:3001  (admin/admin)
- Key panel query (Grafana Explore):
  ```
  histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, route))
  ```
